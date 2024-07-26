'use client';
import { ToastNotification } from 'carbon-components-react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './NotificationContext.module.scss';

type NotificationPayload = {
  title: string;
  subtitle?: string;
  id: string;
};

type NotificationContext = {
  displayNotification: (payload: NotificationPayload) => void;
};

const NotificationContext = createContext<NotificationContext>({
  displayNotification: () => null,
});

const DEFAULT_TIMEOUT = 6000;

type Props = {
  children: React.ReactNode;
};

export function NotificationProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

  const closeNotification = (id: string) => {
    setNotifications((previousNotifications) =>
      previousNotifications.filter((notification) => notification.id !== id)
    );
  };

  const displayNotification = useCallback((payload: NotificationPayload) => {
    setNotifications((previousNotifications) =>
      previousNotifications.concat(payload)
    );
    setTimeout(() => {
      closeNotification(payload.id);
    }, DEFAULT_TIMEOUT);
  }, []);

  const value = useMemo(
    () => ({
      displayNotification,
    }),
    [displayNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {!!notifications.length &&
        createPortal(
          <div className={styles.container}>
            {notifications.map((notification) => (
              <ToastNotification
                className={styles.notification}
                key={notification.id}
                onCloseButtonClick={() => closeNotification(notification.id)}
                kind='success'
                title={notification.title}
                subtitle={notification.subtitle}
              />
            ))}
          </div>,
          document.body
        )}
    </NotificationContext.Provider>
  );
}

export const useNotificationContext = () => useContext(NotificationContext);

'use client';
import { ToastNotification } from 'carbon-components-react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type NotificationPayload = {
  title: string;
  subtitle?: string;
  id: string;
};

type NotificationContext = {
  displayNotification: (body: NotificationPayload) => void;
};

const NotificationContext = createContext<NotificationContext>({
  displayNotification: () => null,
});

const DEFAULT_TIMEOUT = 5000;

type Props = {
  children: React.ReactNode;
};

export function NotificationProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

  const closeNotification = (id: string) => {
    setNotifications((value) =>
      value.filter((notification) => notification.id !== id)
    );
  };

  const displayNotification = useCallback((payload: NotificationPayload) => {
    setNotifications((value) => value.concat(payload));
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
          <div
            style={{
              position: 'fixed',
              top: '12px',
              right: '12px',
            }}
          >
            {notifications.map((notification) => (
              <ToastNotification
                style={{ marginBottom: '8px'}}
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

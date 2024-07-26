import {
  UserMultiple,
  Portfolio,
  Wheat,
  StarFilled,
  Ruler,
  Meter,
  ToolKit,
  Rocket,
} from '@carbon/icons-react';
import { useNotificationContext } from '@/app/context/NotificationContext';
import { useCallback, useMemo } from 'react';
import { formatMoney } from '@/app/utils/money';
import ListProduct from '../ListProduct/ListProduct';

type Props = {
  starship: Starship;
};

export default function StarshipListProduct({ starship }: Props) {
  const { displayNotification } = useNotificationContext();

  const formatPrice = (cost: string) => {
    if (cost === 'unknown' || isNaN(Number(cost))) {
      return 'Price Unknown';
    }
    return `${formatMoney(Number(cost))} Credits`;
  };

  const handleStarshipPurchase = useCallback(
    (quantity: number) => {
      displayNotification({
        title: `Added ${quantity} - ${starship.name} to basket`,
        subtitle: 'Excellent choice 🚀',
        id: Math.random().toString(),
      });
    },
    [displayNotification, starship.name]
  );

  const tags = useMemo(
    () => [
      { Icon: UserMultiple, name: 'Passengers', value: starship.passengers },
      { Icon: ToolKit, name: 'Crew', value: starship.crew },
      { Icon: Portfolio, name: 'Cargo', value: starship.cargo_capacity },
      { Icon: Wheat, name: 'Passengers', value: starship.passengers },
      {
        Icon: StarFilled,
        name: 'Hyperdrive',
        value: starship.hyperdrive_rating,
      },
      { Icon: Ruler, name: 'Length', value: starship.length },
      {
        Icon: Meter,
        name: 'Max Speed',
        value: starship.max_atmosphering_speed,
      },
      { Icon: Rocket, name: 'Class', value: starship.starship_class },
    ],
    [
      starship.cargo_capacity,
      starship.crew,
      starship.hyperdrive_rating,
      starship.length,
      starship.max_atmosphering_speed,
      starship.passengers,
      starship.starship_class,
    ]
  );

  return (
    <ListProduct
      title={starship.name}
      subTitle={starship.model}
      price={formatPrice(starship.cost_in_credits)}
      tags={tags}
      onAddToBasket={handleStarshipPurchase}
    />
  );
}

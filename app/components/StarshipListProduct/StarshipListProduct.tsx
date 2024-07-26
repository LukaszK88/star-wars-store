import { Button, Tile, NumberInput } from 'carbon-components-react';
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
import styles from './StarshipListProduct.module.scss';
import { useNotificationContext } from '@/app/context/NotificationContext';
import { useState } from 'react';
import { formatMoney } from '@/app/utils/money';
import ProductOverviewTag from '../ProductOverviewTag/ProductOverviewTag';

type Props = {
  starship: Starship;
};

export default function StarshipListProduct({ starship }: Props) {
  const [quantity, setQuantity] = useState(1);

  const { displayNotification } = useNotificationContext();

  const formatPrice = (cost: string) => {
    if (cost === 'unknown') {
      return 'Price Unknown';
    }
    return `${formatMoney(Number(starship.cost_in_credits))} Credits`;
  };

  const handleStarshipPurchase = () => {
    displayNotification({
      title: `Added ${quantity} - ${starship.name} to basket`,
      subtitle: 'Excellent choice 🚀',
      id: Math.random().toString(),
    });
    setQuantity(1);
  };

  const handleQuantityChange = (
    _:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
    { value }: { value: number | string }
  ) => {
    setQuantity(Number(value));
  };

  return (
    <Tile>
      <div>
        <div>
          <h1 className={styles.name}>{starship.name}</h1>
          <h1 className={styles.model}>{starship.model}</h1>
        </div>
        <div className={styles.price}>
          {formatPrice(starship.cost_in_credits)}
        </div>

        <div className={styles.overview}>Overview</div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          <ProductOverviewTag
            Icon={UserMultiple}
            name='Passengers'
            value={starship.passengers}
          />
          <ProductOverviewTag
            Icon={ToolKit}
            name='Crew'
            value={starship.crew}
          />
          <ProductOverviewTag
            Icon={Portfolio}
            name='Cargo'
            value={starship.cargo_capacity}
          />
          <ProductOverviewTag
            Icon={Wheat}
            name='Consumables'
            value={starship.consumables}
          />
          <ProductOverviewTag
            Icon={StarFilled}
            name='Hyperdrive'
            value={starship.hyperdrive_rating}
          />
          <ProductOverviewTag
            Icon={Ruler}
            name='Length'
            value={starship.length}
          />
          <ProductOverviewTag
            Icon={Meter}
            name='Max Speed'
            value={starship.max_atmosphering_speed}
          />
          <ProductOverviewTag
            Icon={Rocket}
            name='Class'
            value={starship.starship_class}
          />
        </div>
        <div className={styles.footer}>
          <div>
            <NumberInput
              onChange={handleQuantityChange}
              className={styles.numberInput}
              size='sm'
              id='quantity-input'
              label='Number of Ships'
              min={1}
              value={quantity}
              invalidText='Number is not valid'
            />
          </div>
          <Button
            onClick={handleStarshipPurchase}
            className='items-center'
            isExpressive
          >
            Add to Basket
          </Button>
        </div>
      </div>
    </Tile>
  );
}

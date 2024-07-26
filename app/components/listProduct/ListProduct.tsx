import {
  Button,
  Tile,
  NumberInput,
  Tag,
  NumberInputOnChangeDataVariant,
} from 'carbon-components-react';
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
import styles from './ListProduct.module.scss';
import { useNotificationContext } from '@/app/context/NotificationContext';
import { useState } from 'react';
import { formatMoney } from '@/app/utils/money';

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
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-2'>
          <Tag type='outline' renderIcon={UserMultiple}>
            {starship.crew} Passengers
          </Tag>
          <Tag type='outline' renderIcon={ToolKit}>
            {starship.crew} Crew
          </Tag>
          <Tag type='outline' renderIcon={Portfolio}>
            {starship.cargo_capacity}
          </Tag>
          <Tag type='outline' renderIcon={Wheat}>
            {starship.consumables}
          </Tag>
          <Tag type='outline' renderIcon={StarFilled}>
            {starship.hyperdrive_rating} Hyperdrive
          </Tag>
          <Tag type='outline' renderIcon={Ruler}>
            {starship.length} Meters
          </Tag>
          <Tag type='outline' renderIcon={Meter}>
            {starship.max_atmosphering_speed} Max Speed
          </Tag>
          <Tag type='outline' renderIcon={Rocket}>
            {starship.starship_class}
          </Tag>
        </div>

        <div className={styles.footer}>
          <div>
            <NumberInput
              onChange={handleQuantityChange}
              className={styles.numberInput}
              size='sm'
              id='number-input'
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

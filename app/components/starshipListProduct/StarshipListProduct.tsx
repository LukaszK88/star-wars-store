import { Button, Tile, ButtonSet, Tag } from 'carbon-components-react';
import {
  Add,
  Subtract,
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
import classNames from 'classnames';

type Props = {
  starship: Starship;
};

export default function StarshipListProduct({ starship }: Props) {
  const formatPrice = (cost: string) => {
    if (cost === 'unknown') {
      return 'Price Unknown';
    }
    return `${starship.cost_in_credits} Credits`;
  };

  return (
    <Tile>
      <div>
        <div>
          <h1 className={styles.name}>{starship.name}</h1>
          <h1 className={styles.model}>{starship.model}</h1>
        </div>
        <div className={classNames(styles.price, 'pt-4')}>
          {formatPrice(starship.cost_in_credits)}
        </div>

        <div className={classNames(styles.overview, 'pt-4')}>Overview</div>
        <div className='grid grid-cols-3 gap-2'>
          <Tag type='outline' renderIcon={UserMultiple}>
            {starship.crew} Passengers
          </Tag>
          <Tag type='outline' renderIcon={ToolKit}>
            {starship.crew} Crew
          </Tag>
          <Tag type='outline' renderIcon={Portfolio}>
            {starship.cargo_capacity}{' '}
          </Tag>
          <Tag type='outline' renderIcon={Wheat}>
            {starship.consumables}{' '}
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
      </div>

      {/*       


      // consumbales
      // cargo
      // crew
      // hyperdrive rating
      // model */}

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          <Button
            kind='tertiary'
            renderIcon={Add}
            iconDescription='Add unit'
            hasIconOnly
          />
          <div className='h-full px-6 bg-white text-center leading-10'>1</div>
          <Button
            kind='tertiary'
            renderIcon={Subtract}
            iconDescription='Remove unit'
            hasIconOnly
          />
        </div>

        <Button isExpressive>BUY</Button>
      </div>
    </Tile>
  );
}

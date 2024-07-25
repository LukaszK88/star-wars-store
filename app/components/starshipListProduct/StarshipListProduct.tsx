import { Button, Tile, NumberInput, Tag } from 'carbon-components-react';
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
        <div className={styles.price}>
          {formatPrice(starship.cost_in_credits)}
        </div>

        <div className={styles.overview}>Overview</div>
        <div className='grid grid-cols-3 gap-2'>
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
      
      <div className='flex flex-row py-4'>
        <div >
          <NumberInput className='px-4' size='sm' id="number-input" label="Number of Ships" min={0} value={1} invalidText="Number is not valid" />
        </div>
        <Button className='items-center' isExpressive>BUY</Button>
      </div>
      </div>
    </Tile>
  );
}

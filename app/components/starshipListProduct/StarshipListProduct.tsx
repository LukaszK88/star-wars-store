import { Button, Tile, ButtonSet, TextInput } from 'carbon-components-react';
import { Add, Subtract } from '@carbon/icons-react';

type Props = {
  starship: Starship;
};

export default function StarshipListProduct({ starship }: Props) {
  return (
    <Tile>
      <h1 className='font-bold'>{starship.name}</h1>

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          <Button
            kind='tertiary'
            renderIcon={Add}
            iconDescription='Icon Description'
            hasIconOnly
          />
          <div className='h-full px-6 bg-white text-center leading-10'>1</div>
          <Button
            kind='tertiary'
            renderIcon={Subtract}
            iconDescription='Icon Description'
            hasIconOnly
          />
        </div>

        <Button isExpressive>BUY</Button>
      </div>
    </Tile>
  );
}

import { Button, Tile, NumberInput } from 'carbon-components-react';
import styles from './ListProduct.module.scss';
import React, { ComponentProps, useCallback, useState } from 'react';
import ProductOverviewTag from '../ProductOverviewTag/ProductOverviewTag';

type Props = {
  title: string;
  subTitle: string;
  price: string;
  tags: ComponentProps<typeof ProductOverviewTag>[];
  onAddToBasket: (quantity: number) => void;
};

export default function ListProduct({
  title,
  subTitle,
  price,
  tags,
  onAddToBasket,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const handleStarshipPurchase = useCallback(() => {
    onAddToBasket(quantity);
    setQuantity(1);
  }, [onAddToBasket, quantity]);

  const handleQuantityChange = useCallback(
    (
      _:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLButtonElement>,
      { value }: { value: number | string }
    ) => {
      setQuantity(Number(value));
    },
    []
  );

  return (
    <Tile>
      <div>
        <div>
          <h1 className={styles.name}>{title}</h1>
          <h1 className={styles.model}>{subTitle}</h1>
        </div>
        <div className={styles.price}>{price}</div>
        <div className={styles.overview}>Overview</div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {tags.map((tag, index) => (
            <ProductOverviewTag key={index} {...tag} />
          ))}
        </div>
        <div className={styles.footer}>
          <div>
            <NumberInput
              onChange={handleQuantityChange}
              className={styles.numberInput}
              size='sm'
              id='quantity-input'
              label='Number of Products'
              min={1}
              value={quantity}
              invalidText='Number is not valid'
            />
          </div>
          <Button
            onClick={handleStarshipPurchase}
            className='items-center w-full sm:w-auto'
            isExpressive
          >
            Add to Basket
          </Button>
        </div>
      </div>
    </Tile>
  );
}

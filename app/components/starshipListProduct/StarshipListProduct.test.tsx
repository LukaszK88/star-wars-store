import { fireEvent, render, screen } from '@testing-library/react';
import StarshipListProduct from './StarshipListProduct';
import { ComponentProps } from 'react';
import { starshipResponse } from '@/app/tests/fixtures/starship';

const mockDisplayNotification = jest.fn();
jest.mock('../../context/NotificationContext', () => ({
  useNotificationContext: () => ({
    displayNotification: mockDisplayNotification,
  }),
}));

const props: ComponentProps<typeof StarshipListProduct> = {
  starship: starshipResponse.results[0],
};

describe('<StarshipListProduct/>', () => {
  it('should handle starship purchase', () => {
    const quantity = '1';
    render(<StarshipListProduct {...props} />);

    fireEvent.click(screen.getByText('Add to Basket'));

    expect(mockDisplayNotification).toHaveBeenCalledWith({
      id: expect.any(String),
      subtitle: 'Excellent choice 🚀',
      title: `Added ${quantity} - ${props.starship.name} to basket`,
    });
  });

  it('should handle multiple starship purchase', () => {
    const quantity = '1';
    const newQuantity = '3';

    render(<StarshipListProduct {...props} />);

    const quantityInput = screen.getByDisplayValue(quantity);

    expect(quantityInput).toBeDefined();

    fireEvent.input(quantityInput, { target: { value: newQuantity } });

    expect(screen.getByDisplayValue(newQuantity)).toBeDefined();

    fireEvent.click(screen.getByText('Add to Basket'));

    expect(mockDisplayNotification).toHaveBeenCalledWith({
      id: expect.any(String),
      subtitle: 'Excellent choice 🚀',
      title: `Added ${newQuantity} - ${props.starship.name} to basket`,
    });

    expect(screen.getByDisplayValue(quantity)).toBeDefined();
  });
});

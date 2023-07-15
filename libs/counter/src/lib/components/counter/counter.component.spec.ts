import { fireEvent, render, screen } from '@testing-library/angular';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  test('should render counter', async () => {
    const count = 5;
    await render(CounterComponent, {
      componentProperties: { count },
    });

    expect(screen.getByTestId('count').innerHTML).toBe(`${count}`);
  });

  test('should emit increment event on click', async () => {
    const count = 5;
    const increment = jest.fn();

    await render(CounterComponent, {
      componentProperties: { count, increment: { emit: increment } as any },
    });

    fireEvent.click(screen.getByText('keyboard_arrow_right'));
    expect(increment).toHaveBeenCalledTimes(1);
  });
});
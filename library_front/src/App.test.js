import { render, screen } from '@testing-library/react';
import App from './App';

test('Multiplication test', () => {
  // Caso de teste 1: 2 * 3 = 6
  expect(multiply(2, 3)).toBe(6);

  // Caso de teste 2: 5 * 0 = 0
  expect(multiply(5, 0)).toBe(0);

  // Caso de teste 3: -4 * 7 = -28
  expect(multiply(-4, 7)).toBe(-28);

  // Caso de teste 4: 10 * 2 = 20
  expect(multiply(10, 2)).toBe(20);
});

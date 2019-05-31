import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  expect(getExpenseTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  expect(getExpenseTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  expect(getExpenseTotal([expenses[0], expenses[1]]))
    .toBe(expenses[0].amount + expenses[1].amount);
});

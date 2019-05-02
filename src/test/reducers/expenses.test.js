import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: 100,
    description: 'Beer',
    note: 'yum',
    amount: 695,
    createdAt: 2000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'Hotdog';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test('should not edit an expense if expense not found', () => {
  const description = 'Hotdog';
  const action = {
    type: 'EDIT_EXPENSE',
    id: 999,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

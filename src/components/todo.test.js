import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from './TodoForm';
import userEvent from '@testing-library/user-event';

test('Input gets empty value after clicking Enter ', () => {
  render(<TodoForm />);
  const input = screen.getByPlaceholderText(/What/);
  userEvent.type(input, '{enter}');
  expect(input.value).toBe('');
});

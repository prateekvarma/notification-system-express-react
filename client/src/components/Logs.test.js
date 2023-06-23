import { render, screen } from '@testing-library/react';
import Logs from './Logs';

test('it shows a table with different columns', () => {
  render(<Logs />);

  const column1Header = screen.getByRole('columnheader', { name: '#ID' });
  const column2Header = screen.getByRole('columnheader', { name: 'Category' });
  const column3Header = screen.getByRole('columnheader', { name: 'Name of User' });
  const column4Header = screen.getByRole('columnheader', { name: 'Message' });
  const column5Header = screen.getByRole('columnheader', { name: 'Type of notifications' });
  const column6Header = screen.getByRole('columnheader', { name: 'User email' });
  const column7Header = screen.getByRole('columnheader', { name: 'Time of log' });

  expect(column1Header).toBeInTheDocument();
  expect(column2Header).toBeInTheDocument();
  expect(column3Header).toBeInTheDocument();
  expect(column4Header).toBeInTheDocument();
  expect(column5Header).toBeInTheDocument();
  expect(column6Header).toBeInTheDocument();
  expect(column7Header).toBeInTheDocument();
});

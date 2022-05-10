import { render, screen , fireEvent} from '@testing-library/react';
import GetExcel from './GetExcel';

test('It should have a file input' , () =>  { 
  render(<GetExcel />);
  expect(screen.getByLabelText(/Your Excel file:/)).toBeInTheDocument();
});

test('It should have a submit button' , () =>  {
  render(<GetExcel />);
  expect(screen.getByText('Submit')).toBeInTheDocument();
});






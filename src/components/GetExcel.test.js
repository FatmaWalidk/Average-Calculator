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

test('It should accept only Excel files as file input' , () =>  {
  render(<GetExcel />);
  fireEvent.click(screen.getByText('Submit'));
  expect(screen.getByText("Only Excel file can be submitted. Please try again!")).toBeInTheDocument();
});




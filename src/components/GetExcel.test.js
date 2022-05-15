import { render, screen } from '@testing-library/react';
import GetExcel from './GetExcel';

test('It should have a file input' , () =>  { 
  render(<GetExcel />);
  expect(screen.getByLabelText(/Your Excel file:/)).toBeInTheDocument();
});

test('It should have a submit button' , () =>  {
  render(<GetExcel />);
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

// ********* Second sprint test cases *********
test('t should go to the home page when clicking the resrt button' , () =>  {
  render(<GetExcel />);
  expect(screen.getByText('Reset')).toBeInTheDocument();
});





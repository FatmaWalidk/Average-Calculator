import { render, screen, fireEvent } from '@testing-library/react';
import CalculateAverage from './CalculateAverage';

test('It should calculate and display the correct class average when click submit' , () =>  {
    render(<CalculateAverage />);
    expect(screen.getByTestId("Class Average")).toBeInTheDocument();   
  });

  
// ********* Second sprint test cases *********
test('It should have a new button' , () =>  {
  render(<calculateAverage />);
  expect(screen.getByText('New')).toBeInTheDocument();
});

test('It should have a download button' , () =>  {
  render(<calculateAverage />);
  expect(screen.getByText('Download')).toBeInTheDocument();
});

test('t should go to the home page when clicking the new button' , () =>  {
  render(<calculateAverage />);
  fireEvent.click(screen.getByText('New'));
  expect(render(<getExcel />));
});

test('It should download a JSON file of the file data and the calculated average when clicking the download button' , () =>  {
  render(<calculateAverage />);
  fireEvent.click(screen.getByText('Download'));
  expect(screen.getByText("Downloaded Successfully")).toBeInTheDocument();


});
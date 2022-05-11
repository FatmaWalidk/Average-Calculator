import { render, screen } from '@testing-library/react';
import CalculateAverage from './CalculateAverage';

test('It should calculate and display the correct class average when click submit' , () =>  {
    render(<CalculateAverage />);
    expect(screen.getByTestId("Class Average")).toBeInTheDocument();   
  });

  
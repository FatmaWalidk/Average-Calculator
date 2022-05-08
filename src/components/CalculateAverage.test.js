import { render, screen , fireEvent} from '@testing-library/react';
import CalculateAverage from './CalculateAverage';
import GetExcel from './GetExcel';

test('It should calculate and display the correct class average when click submit' , () =>  {
    render(<GetExcel />);
    fireEvent.click(screen.getByText('Submit'));
    render(<CalculateAverage FN={Sara} LN={Ahmad} A1={60} A2={90} A3={100} />);
    expect(screen.queryByText("Sara")).toBeInTheDocument();
    expect(screen.queryByText("Ahmad")).toBeInTheDocument();
    expect(screen.queryByText("60")).toBeInTheDocument();
    expect(screen.queryByText("90")).toBeInTheDocument();
    expect(screen.queryByText("100")).toBeInTheDocument();
    expect(screen.queryByText("85")).toBeInTheDocument();
  });
  

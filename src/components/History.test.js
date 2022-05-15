import { render, screen, fireEvent } from '@testing-library/react';
import History from './History';


// ********* Second sprint test cases *********
describe("Navigation", () => { 
    test('It should allow user to dounload JSON file contains class data' , () =>  {
    render(<History />);
    expect(screen.getByText("Download")).toBeInTheDocument();
  })
});
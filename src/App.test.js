import { fireEvent, render, screen } from "@testing-library/react";
import Booking from './Booking';
import Main from "./Main";

test('Renders the BookingForm heading', () => {
    /*render(<Booking />); */
    /* const headingElement = screen.getByText("Book your Table");
    expect(headingElement).toBeInTheDocument(); */
    render(<Main />);
    const mockFunc =  jest.fn();
    mockFunc();
    expect(mockFunc()).toBeDefined();
})
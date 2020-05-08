import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>);
    const header = getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    async () => {const {getByLabelText, getByTestId} = render(<CheckoutForm />)

    const firstName = getByLabelText(/firstName/i);
    const lastName = getByLabelText(/lastName/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);
    const successMessage = getByText(/Woo-hoo!/i);

    fireEvent.change(firstName, {target: {value:"Matthew"}});
    fireEvent.change(lastName, {target: {value:"Schuette"}});
    fireEvent.change(address, {target: {value:"109 Santa Cruz Ct."}})
    fireEvent.change(city, {target: {value:"Slidell"}})
    fireEvent.change(state, {target: {value:"Louisiana"}});
    fireEvent.change(zip, {target: {value:"70458"}});
    fireEvent.click(getByTestId("submit"));}

    expect(successMessage).toBeInTheDocument();  
});

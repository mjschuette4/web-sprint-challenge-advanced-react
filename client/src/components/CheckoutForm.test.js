import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>);
    const header = getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByTestId, findAllByText} = render(<CheckoutForm />);

    const submit = getByTestId("submit");
    const firstName = getByLabelText(/First Name/i);
    // const lastName = getByText(/Last Name/i);
    // const address = getByText(/Address/i);
    // const city = getByText(/City/i);
    // const state = getByText(/State/i);
    // const zip = getByText(/Zip/i);

    fireEvent.change(firstName, {target: {value:"Matthew"}});
    // fireEvent.change(lastName, {target: {value:"Schuette"}});
    // fireEvent.change(address, {target: {value:"109 Santa Cruz Ct."}})
    // fireEvent.change(city, {target: {value:"Slidell"}})
    // fireEvent.change(state, {target: {value:"Louisiana"}});
    // fireEvent.change(zip, {target: {value:"70458"}});
    fireEvent.click(submit);

    findAllByText(/Matthew/i);

    expect(getByTestId("successMessage")).toBeInTheDocument();  
});

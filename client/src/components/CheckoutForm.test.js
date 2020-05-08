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

    fireEvent.change(firstName, {target: {value:"Matthew"}});
    fireEvent.click(submit);
    
    findAllByText(/Matthew/i);
    expect(getByTestId("successMessage")).toBeInTheDocument();  
});

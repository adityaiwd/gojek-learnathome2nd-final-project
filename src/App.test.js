import React from 'react'
import {render,fireEvent} from "@testing-library/react";
import App from "./App";

it("renders correctly", () => {
    const {queryByTestId, queryByPlaceholderText} = render(<App />)
    expect(queryByTestId("searchbar")).toBeTruthy()
})

describe("input value",() =>{
    it("updates on change", () => {
        const {queryByTestId} = render(<App />)
        const searchInput = queryByTestId("searchbar").querySelector('input');
        fireEvent.change(searchInput, {target: {value: "test"}})
        expect(searchInput.value).toBe("test")
    })
})
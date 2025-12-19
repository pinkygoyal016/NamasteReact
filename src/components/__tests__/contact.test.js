import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact";

describe("grup of test case",()=>{
test("should check react component Render",()=>{
    render(<Contact/>)
const heading= screen.getByRole("heading")
expect(heading).toBeInTheDocument()
})
test("should check react component Render",()=>{
    render(<Contact/>)
const pleac= screen.getByPlaceholderText("Name")
expect(pleac).toBeInTheDocument()
})

test("should check react component Render",()=>{
    render(<Contact/>)
const button= screen.getByRole("button")
expect(button).toBeInTheDocument()
})

test("should check react component Render",()=>{
    render(<Contact/>)
const inputBox= screen.getAllByRole("textbox")
console.log(inputBox.length)
expect(inputBox.length).toBe(2)
})
})
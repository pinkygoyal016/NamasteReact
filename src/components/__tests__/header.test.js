import { render,screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header"
import appStore from "../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";


test("should check if comp0nent render",()=>{
   render(
     <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter> 
) 
const loginButton= screen.getByRole("button")
expect(loginButton).toBeInTheDocument()
})

test("should check if comp0nent render",()=>{
   render(
     <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter> 
) 
const loginBtext= screen.getByText("Login",{name:"Login"})
fireEvent.click(loginBtext)
const logoutBtext= screen.getByText("LogOut",{name:"LogOut"})
expect(logoutBtext).toBeInTheDocument()
})
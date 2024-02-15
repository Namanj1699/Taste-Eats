import { screen,render, fireEvent } from "@testing-library/react"
import Header from "../Header" 
import { Provider } from "react-redux";
import appStore from "../../appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom" 

describe('should test all testcases in header test ', () => {
    it('should load header component with login buttton', () => {
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        )
    
        const loginbtn = screen.getByRole("button",{name : "login"});
    
        expect(loginbtn).toBeInTheDocument();
    
    })
    
    test('after click login button change into logout', () => {
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
        )
    
        const login = screen.getByRole("button",{name : "login"})
        fireEvent.click(login)
    
        const logout = screen.getByText("logout");
    
        expect(logout).toBeInTheDocument();
    })
})




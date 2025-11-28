import { LOGO_URL } from "./utils/constants";
import { useState } from "react";

 const Header = () => {
   const [btnName,setbtnName]= useState("Login")
   return (
      <div className="header">
                     <img className="logo" src={LOGO_URL} alt="Logo" />
            <div className="nav-container">
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
                  <button className="login-btn" onClick={()=>{
                    btnName==="Login"? setbtnName("LogOut"):setbtnName("Login");
                  }}>{btnName}                    
                  </button>
               </ul>
                  </div>
      </div>
   )
}
export default Header;
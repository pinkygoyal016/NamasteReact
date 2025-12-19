import { LOGO_URL } from "./utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
   const { loggedInUser } = useContext(UserContext)
   const [btnName, setbtnName] = useState("Login")
   const onlineStatus = useOnlineStatus("")
   const cartItems = useSelector((store) => store.cart.items)
   return (
      <div className="flex justify-between border to-black bg-pink-50 sm:bg-amber-50 lg:bg-green-50">
         <div className="logo-conatiner">
            <img className="w-40" src={LOGO_URL} alt="Logo" />
         </div>

         <div className="flex items-center">
            <ul className="flex p-2 m-2 ">
               <li className="px-4">
                  Online Status:{onlineStatus === true ? "🟢" : "🔴"}
               </li>
               <li className="px-4">
                  <Link to="/">Home</Link>
               </li>
               <li className="px-4">
                  <Link to="/grocery">Grocery</Link>
               </li>

               <li className="px-4">
                  <Link to="/about">About Us</Link>
               </li>
               <li className="px-4">
                  <Link to="/contact">Contact Us</Link>
               </li>

               <li className="px-4">
                  <Link to="/cart">🛒({cartItems.length})-items</Link>
               </li>


               <button className="login-btn" onClick={() => {
                  btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
               }}>{btnName}
               </button>
               <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
         </div>
      </div>

   )
}
export default Header;
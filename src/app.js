import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import { useRouteError } from "react-router";
import Error from "./components/Error";
import RestInfo from "./components/RestInfo";
import { lazy, Suspense, useContext, useState, useEffect } from "react";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore"
import Cart from "./components/Cart";



//   const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",{id:"child1"},
//        React.createElement("h1",{},"This a h1 tag") 
//     )


//  );
//  const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement("div",{id:"child1"},
//        [React.createElement("h1",{},"This a h1 tag") ,React.createElement("h1",{},"This a h2 tag") ] 
//     ),
//     React.createElement("div",{id:"child2"},
//        [React.createElement("h1",{},"This a h1 tag") ,React.createElement("h1",{},"This a h2 tag") ] 
//     )]
//  );

//  console.log(parent)
//     const root=  ReactDOM.createRoot(document.getElementById("root"))
//     root.render(parent)

// const jsxheading= (<h1 className="head"  tabIndex="5">
//    Namaste react</h1>)
//    console.log(jsxheading);

// const Title=()=>(
//    <h1>Hi,I'm coming from Title Component</h1>
// )

// const num=100
// const FuncComp= ()=>( 
// <div id="container">
//    {num}
//    <Title/>
//    <h1 className="heading">Namaste React</h1>
// </div>
// )

const Grocery = lazy(() => import("./components/Grocery"))
const AppLayout = () => {
   const [userName, setUserName] = useState();

   useEffect(() => {
      const data = {
         name: "Pinky Goyal",
      };
      setUserName(data.name)
   }, [])
   return (

      <Provider store={appStore}>

         <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
               <Header />

               <Outlet />
            </div>
         </UserContext.Provider>
      </Provider>




   )
}
const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body />
         },
         {
            path: "/about",
            element: <About />
         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
         },
         {
            path: "/restaurents/:resId",
            element: <RestInfo />
         },
         {
            path: "/cart",
            element: <Cart />
         }
      ],
      errorElement: <Error />
   },


])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
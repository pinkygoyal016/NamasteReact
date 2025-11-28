import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
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

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
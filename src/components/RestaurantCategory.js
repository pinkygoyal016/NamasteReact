import { useState } from "react";
import ItemList from "./ItemList"


const RestaurantCategory= ({data,showitems,setShowIndex})=>{
 
 const handleClick=()=>{
setShowIndex()
 }   

return(
    
    
<div className="w-6/12 mx-auto my-4 shadow-2xl bg-gray-100  ">
<div className="flex justify-between cursor-pointer" onClick={handleClick}>
     <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
   <span>⬇</span>
   </div>
  {showitems && <ItemList items={data.itemCards}/>}
</div>
)
}
 export default RestaurantCategory
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { MENU_API_URL } from "./utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import useRestMenu from "./utils/useRestMenu";
const RestInfo= ()=>{
    const {resId} = useParams()
   const resInfo= useRestMenu(resId)
  //  const [resInfo, setResInfo] = useState(null);
   const[showIndex,setShowIndex]=useState(null)

 
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API_URL + resId);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if(resInfo===null)return <Shimmer/>;
const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

console.log(itemCards)
 const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories)
return(
    <div className="text-center">
        <h1 className="font-bold my-6 text-xl">{name}</h1>
      <p className="font-bold my-6 text-l">
        {cuisines.join(",")}-{costForTwoMessage}
        </p>
            {categories.map((cat,index)=>(
                            <RestaurantCategory  
                            key={cat?.card?.card?.title} 
                            data={cat?.card?.card}
                           showitems={index==showIndex ? true:false}
                           setShowIndex={()=>setShowIndex((prevIndex)=>(prevIndex===index?null:index))}
                            /> ))}
    </div>
)
}
export default RestInfo
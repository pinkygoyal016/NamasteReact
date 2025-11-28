import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
   const [listOfRestuarent, setListOfRestuarent] = useState([]);
   const[filteredrestuarent,setfilteredrestuarent]=useState([])
   const[searchtext, setSearchText] = useState("")
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5999883&lng=77.3708068&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json()
      console.log(json)
      setListOfRestuarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredrestuarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   return listOfRestuarent.length === 0 ? <Shimmer /> : (
      <div className="body">
         <div className="filter">

            <div className="search">
            <input type="text" className="search-box" value={searchtext} onChange={(e)=>{
               setSearchText(e.target.value)
            }}/>
            <button onClick={()=>{
             const filteredres=listOfRestuarent.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
              setfilteredrestuarent(filteredres)
            }}>search</button>
           
         </div>

                  <div className="filterbtn">
            <button
               onClick={() => {
                  const filterList = listOfRestuarent.filter(
                     (res) => res.info.avgRating > 4.4
                  );
                  setListOfRestuarent(filterList)
               }} >Top Rated restuarent</button>
         </div>
         </div>
         <div className="res-container">
            {filteredrestuarent.map((restuarent) => (
               <RestCard key={restuarent.info.id} restData={restuarent} />
            ))}
         </div>
      </div>

   )
}
export default Body;
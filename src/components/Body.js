import { useEffect, useState, useContext } from "react";
import RestCard from "./RestCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import { withPromotedLable } from "./RestCard";
import UserContext from "./utils/UserContext";

const Body = () => {
   const [listOfRestuarent, setListOfRestuarent] = useState([]);
   const [filteredrestuarent, setfilteredrestuarent] = useState([])
   const [searchtext, setSearchText] = useState("");

   const { loggedInUser, setUserName } = useContext(UserContext)

   const RestcardPromoted = withPromotedLable(RestCard)
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch(//"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5999883&lng=77.3708068&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants");
      const json = await data.json()

      setListOfRestuarent(//json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
         json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
      setfilteredrestuarent(//json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
         json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
      console.log(json)
   }
   const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) {
      return (
         <h1>Opps!!You seems Offline. Please turn on your Internet Connection. </h1>
      )
   }

   return listOfRestuarent.length === 0 ? <Shimmer /> : (
      <div className="body">
         <div className="flex">

            <div className=" m-2 p-2">
               <input type="text" className="border border-solid border-black" value={searchtext} onChange={(e) => {
                  setSearchText(e.target.value)
               }} />
               <button
                  className="px-3 py-1.5 bg-green-100 m-2 cursor-pointer rounded-xl items-center "
                  onClick={() => {
                     const filteredres = listOfRestuarent.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                     setfilteredrestuarent(filteredres)
                  }}>Search
               </button>
            </div>

            <div className="m-2 p-2 flex items-center">
               <button
                  className="px-3 py-1.5 bg-gray-100 m-2 cursor-pointer rounded-xl"
                  onClick={() => {
                     const filterList = listOfRestuarent.filter(
                        (res) => res.info.avgRating > 4.4
                     );
                     setfilteredrestuarent(filterList)
                  }} >Top Rated restuarent</button>
            </div>
            <div className="m-2 p-2 flex items-center">
               <label className="px-1">UserName:</label>
               <input
                  className="border border-black p-2"
                  value={loggedInUser}
                  onChange={(e) => setUserName(e.target.value)}
               />
            </div>
         </div>
         <div className="flex flex-wrap ">
            {filteredrestuarent.map((restuarent) => (
               <Link key={restuarent.info.id} to={"/restaurents/" + restuarent.info.id}>

                  {restuarent.info.veg ? (<RestcardPromoted restData={restuarent} />) : (<RestCard restData={restuarent} />)}

               </Link>
            ))}
         </div>
      </div>

   )
}
export default Body;
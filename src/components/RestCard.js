import { CDN_URL } from "./utils/constants"
const RestCard = (props) => {
   const {restData}=props
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla}=restData?.info
   return (
      <div className="m-5 p-5 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200" >
        
            <img className="rounded-lg" src={CDN_URL+ cloudinaryImageId} alt="resimage"/>
         
         <h3 className="font-bold py-1 text-lg">{name}</h3>
         <h5 className="wrap-break-word">{cuisines.join(",")}</h5>
         <h4>{costForTwo}</h4>
         <h4>{sla.deliveryTime}min</h4>
         <h4>{avgRating}</h4>
      </div>
   )
}

// Higer order Component
//input-Restuarentcard=>RestCard Promoted
export const withPromotedLable=(RestCard)=>{
   return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2">Veg</label>
         <RestCard {...props}/>
        </div>
      )
   }
}
export default RestCard;
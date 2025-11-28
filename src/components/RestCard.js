import { CDN_URL } from "./utils/constants"
const RestCard = (props) => {
   const {restData}=props
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating}=restData?.info
   return (
      <div className="card-details">
        
            <img className="res-logo" src={CDN_URL+ cloudinaryImageId} alt="resimage"/>
         
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{costForTwo}</h4>
         <h4>{restData.info.sla.deliveryTime}min</h4>
         <h4>{avgRating}</h4>
      </div>
   )
}
export default RestCard;
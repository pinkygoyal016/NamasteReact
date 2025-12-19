import { useState,useEffect } from "react";
import {  MENU_API_URL } from "../utils/constants"

const useRestMenu=(resId)=>{
const[resInfo,setResInfo]=useState(null);

   useEffect(()=>{
         fetchMenu();
    },[])

    const fetchMenu=async ()=>{
        const data= await fetch(MENU_API_URL + resId)

         const json=await data.json();
  
    setResInfo(json.data)

    };
    return resInfo;
    
}
export default useRestMenu;
import { useState,useEffect,useContext } from "react"
import UserContext from "./utils/UserContext"

const About=()=>{
    const{loggedInUser}= useContext(UserContext)
    const [aboutInfo,setAboutInfo]= useState("")
      
     useEffect(()=>{
        fetchUSer();
     },[])

     const fetchUSer=async ()=>{
        const profileUrl= await fetch("https://api.github.com/users/pinkygoyal016")
const json= await profileUrl.json();
console.log(json)
setAboutInfo(json)
     }

      
    return (
        
        <div className="about">
            <img src={aboutInfo.avatar_url}></img>
            <h2>Name:{aboutInfo.name}</h2>
            <h3>Location:{aboutInfo.location}</h3>
            <h3>Contact:{aboutInfo.url}</h3>
            <h4>{loggedInUser}</h4>
        </div>
    )}
export default About


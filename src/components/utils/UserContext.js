import { createContext } from "react"

const UserContext=createContext({
    loggedInUser: "defaultuser"
})

 export default UserContext
// import { createContext, useContext, useState } from "react";
// const AuthContext= createContext(null)

// export const AuthProvider = ({children}) =>{
//     const [user,setUser] = useState('')

//     const login =()=>{
//         setUser(user)
//     }
//     const logout =()=>{
//         setUser('')
//     }
//     return (
//         // <AuthContext.Provider value={{user , login , logout}}>
//         //     {children}
//         // </AuthContext.Provider>
//     )
// }
// export const useAuth = ()=>{
//     return useContext(AuthContext)
// }
import React from 'react'

export const Auth = () => {
  return (
    <div>Auth</div>
  )
}

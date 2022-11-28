import { createContext, useEffect, useState } from "react";
import axios from "axios";

type props = {
    children: JSX.Element
}

export interface UserInfo {
    id?: string
    name?: string
    avatar_url?: string,
    username?: string,
    password?: string
}

type userContextValue ={
    user:UserInfo,
    setUser:React.Dispatch<React.SetStateAction<UserInfo>>
}

export const UserContext = createContext({});

export function UserProvider({children}: props){

    const [user, setUser] = useState({});
    let value:userContextValue = {user, setUser}

    useEffect(()=>{
        // axios.get('').then((response)=>{
        //         setUser(user);
        // })
    },[]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    
    )
}
import axios from "axios";
import { UserInfo } from "../context/UserContext";

type CredProps ={
    username : string
    password : string
}


const baseUrl = 'http://localhost:4200';

export function signIn({username,password}:CredProps){
    return axios.get(`${baseUrl}/users`).then(response=>{
        const u=username, p=password;
        const users:UserInfo[] = response.data;
        const user:UserInfo = users.find(u=>u.username==username && u.password==password)!;
        return user;
    });
}
import { createContext } from 'react'
export  const UserInfo={username:"trungdung",password:"123",remember:true};
export let currentJobShow={};
export const HandleLoginContext=createContext();
export const OpenLoginModalContext=createContext({isOpen:false});
export  const LoginContext=createContext({isLogin:false});
export default OpenLoginModalContext
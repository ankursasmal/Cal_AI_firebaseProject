import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
export const  createUserWithEmailAndPass=async(email,password)=>{
    return createUserWithEmailAndPassword(auth,emal,password);
}
import { LoginView } from "./LoginView";
import {loginUser} from "../../services/"
export function LoginContainer(){

    return <LoginView loginUser={(username,password)=>loginUser(username,password)}/>
}
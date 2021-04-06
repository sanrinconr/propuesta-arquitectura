import { useState } from "react"
import { Link } from "react-router-dom";
import { HOME } from "../../navegation/CONSTRAINTS";
import styles from "./LoginView.module.css"
export function LoginView({loginUser}){

    const [input, setInput] = useState({
        username:"",
        password:""
    })

    function handleChange(e){
        const target=  e.target
        const name =  target.name;
        const value = target.value;
        setInput({...input, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(loginUser(input.username, input.password)){
            alert("Login!")
        }else{
            alert("Bad credentials")
        }
    }
    return <div className={styles.container}>
        <p>Hi!, login here!</p>
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="username" value={input.username} onChange={handleChange}></input>
            <input name="password" placeholder="password" value={input.password} onChange={handleChange}></input>
            <button type="submit">Click me to test a login</button>
            <span>Valid is: hola, 12345</span>
        </form>
        <Link to={HOME}>
                Go to home
        </Link>
    </div>
}
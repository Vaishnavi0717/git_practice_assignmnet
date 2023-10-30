import { useState } from "react"
import { baseURL } from "../api";
import axios from "axios"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

const handleLogin = async  () => {
    try {
        let res = await axios.post(`${baseURL}/users/login`, {email,password});
        const token = await res.data.token;
        if (token) { 
            localStorage.setItem('token', token);
            console.log("Login Success")
        }
        
    } catch (error) {
        console.log(error)
    }

}

    return (
        <div className="form">
            <h1>Login Page</h1>
            <input type="text" placeholder="Enter Email" value={ email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter Password' value={ password} onChange={(e) => setpassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login

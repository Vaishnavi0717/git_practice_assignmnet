import { useState } from "react";
import { baseURL } from "../api";
import axios from "axios"


function Signup() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async () => { 
        try {
            const data = {
                email: email,
                password: password,
                gender: gender,
                name: name,
            }
            let res = await axios.post(`${baseURL}/users/register`, data);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="form">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
            <select name="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="select">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="text" placeholder="Enter Email" value={ email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter Password' value={ password} onChange={(e) => setpassword(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
        </div>
        
    )
}

export default Signup

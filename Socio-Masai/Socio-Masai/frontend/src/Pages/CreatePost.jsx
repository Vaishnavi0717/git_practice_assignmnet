import { useState } from "react"
import { baseURL } from "../api"
import axios from "axios"
 

function CreatePost() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [device,setDevice] = useState('')

    const handleCreatePost = async () => {
        try {
            let res = await axios.post(`${baseURL}/posts/add`, {
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({ title, body, device })
            });
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='form'>
            <h1>Create Post</h1>
            <input type="text" placeholder='Enter Post Title' onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='Enter post Body' onChange={(e) => setBody(e.target.value)}/>
            <select placeholder='Select Device' onChange={(e) => setDevice(e.target.value)}>
                <option value="laptop">Laptop</option>
                <option value="pc">PC</option>
                <option value="mobile">Mobile</option>
            </select>
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    )
}

export default CreatePost

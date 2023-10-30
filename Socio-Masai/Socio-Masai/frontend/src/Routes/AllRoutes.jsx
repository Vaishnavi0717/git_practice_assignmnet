import { Routes,Route} from "react-router-dom" 

import Login from "../Pages/Login"
import Homepage from "../Pages/Homapage"
import Signup from "../Pages/Signup"
import UpdatePost from "../Pages/UpdatePost"
import CreatePost from "../Pages/CreatePost"


function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path="/login" element={ <Login/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/posts/update/:id" element={<UpdatePost />}></Route>
            <Route path="/posts/addnew" element={<CreatePost />}></Route>
        </Routes>
    )
}

export default AllRoutes

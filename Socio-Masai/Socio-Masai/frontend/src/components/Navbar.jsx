import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{display:"flex",justifyContent:"space-between",padding:"10px",width:"95vw",backgroundColor:"white",alignItems:"center"}}>
            <div className='logosection' style={{color:"black",fontSize:"40px"}}>Socio-Masai</div>
            <div className='linkssection' style= {{display:"flex",gap:"10px"}}>
                <Link to='/'>Home</Link>
                <Link to='/login'>login</Link>
                <Link to="signup">signup</Link>
                <Link to="posts/addnew">Create Post</Link>
                <Link to="posts/update/:id">Update Post</Link>
            </div>
        </div>
    )
}

export default Navbar



function UpdatePost() {
    return (
        <div className='form'>
            <h1>Update Post</h1>
            <input type="text" placeholder='Enter Post Title'/>
            <input type="text" placeholder='Enter post Body'/>
            <select placeholder='Select Device'>
                <option value="laptop">Laptop</option>
                <option value="pc">PC</option>
                <option value="mobile">Mobile</option>
            </select>
        </div>)
}

export default UpdatePost

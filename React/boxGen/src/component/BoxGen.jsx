import React , { useState } from "react";

const BoxGen = (props) =>{
    const [color,setColor] = useState("");
    const handleColorChange = (e) =>{
        setColor(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = { color };
        props.addBox(newBox);
        setColor("");
    }
return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Color:</label>
                <input  type="text" value={color}  onChange={handleColorChange} placeholder="color" />  
                <button>Add Box </button>
            </form>
        </div>

);

}
export default BoxGen;
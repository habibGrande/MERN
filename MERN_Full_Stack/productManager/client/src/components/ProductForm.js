import React, { useState } from 'react'
import axios from 'axios';

export default () =>{
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ price, setPrice] = useState();

    const handelSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            desc
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <>
        <form onSubmit={handelSubmit} >
            <p>
                <label>Title</label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            </p>
            <p>
                <label>Price</label>
                <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            </p>
            <p>
                <label>Description</label>
                <input type='text' onChange={(e)=>setDesc(e.target.value)} value={desc}></input>
            </p>
            <button>Submit</button>
        </form>
        </>
    )
}
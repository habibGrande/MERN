import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ price, setPrice] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDesc(res.data.desc);
                setPrice(res.data.price)
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            desc
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input type='number' onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                </p>
                <p>
                    <label>Description</label>
                    <input type='text' onChange={(e)=>setDesc(e.target.value)} value={desc}></input>
                </p>
                <button>Submit</button>
            
            </form>
        </div>
    )
}
    
export default Update;


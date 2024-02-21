import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


const Details = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return(
        <>
            <h2>{product.title}</h2> 
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
        </>
    )

}
export default Details;
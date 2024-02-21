import React , { useEffect, useState }from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => setproduct(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            {props.product.map( (product, i) =>
                <p key={i}>
                    <h2>{product.title}</h2> 
                    <p>Price: {product.price}</p>
                    <p>Description: {product.desc}</p>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;


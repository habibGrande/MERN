import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    const { removeFromDom } = props;
    
    const deleteProduct = (id) => {
        
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/products" + product._id}>
                        <h1>{product.title}</h1>
                    </Link>
                    
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default ProductList;


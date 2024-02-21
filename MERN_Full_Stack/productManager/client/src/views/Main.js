import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    const removeFromDom = id => {
        setProduct(product.filter(product => product._id != id));
    }
    return (
        <div>
           <ProductForm/>
           {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}


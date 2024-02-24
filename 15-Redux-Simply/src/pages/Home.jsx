import React, { useState, useEffect } from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchproducts } from '../Redux/ProductSlice';

const Home = () => {
    // const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const { data: product, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchproducts());
        // fetchproducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    if (status === STATUSES.Loading) {
        return <h2 style={{ fontWeight: 'bolder' }}>Loading</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                product.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={() => handleAdd(product)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
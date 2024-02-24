import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems);
    const dispatch = useDispatch();


    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    return (
        <div className='cartWrapper'>
            {
                cartItems.map((item, index) => {
                    return <div className='cartCard' key={index}>
                        <img src={item.image} />
                        <h5>{item.title}</h5>
                        <h5>{item.price}</h5>
                        <button className='btn' onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default Cart
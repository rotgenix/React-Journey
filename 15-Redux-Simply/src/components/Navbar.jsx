import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    console.log(items)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <span>Redux</span>
            <div>
                <Link
                    className='navLink'
                    style={{
                        fontWeight: 'bolder'
                    }}
                    to={'/'}
                >
                    Home
                </Link>
                <Link
                    className='navLink'
                    style={{ marginRight: '5px', fontWeight: 'bolder' }}
                    to={'/cart'}
                >
                    Cart
                </Link>
                <span
                    style={{ marginRight: '5px', fontWeight: 'bolder' }}
                >
                    Items:{items.length}
                </span>
            </div>
        </div>
    )
}

export default Navbar
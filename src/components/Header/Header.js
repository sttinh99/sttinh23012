import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import bell from '../../images/bell.svg'

import './Header.css'


import Search from '../Search/Search'
import react from '../../images/react.svg'
import v from '../../images/shopping-cart.svg'
import uimg from "../../images/profile-user.svg";

import ClientHeader from '../ClientHeader/ClientHeader'

import { GlobalState } from '../GlobalState'

let className = 'create-address'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [isAdmin] = state.UserAPI.isAdmin
    const [cart] = state.UserAPI.cart
    const [user] = state.UserAPI.user
    const [history] = state.UserAPI.history
    const [onDisplay, setOndisplay] = useState(false)
    //console.log(state);
    //console.log(cart);

    const check = () => {
        if (!isLogged) {
            window.location.href = '/login'
            return alert('please login to continue');
        }
    }
    const x = history.filter(item => item.status === false)
    const logoutUser = async () => {
        await axios.get('/user/logout');
        localStorage.removeItem('firstLogin')
        window.location.href = '/login'
    }
    const showModelNotify = () => {
        if (className === 'create-address') {
            className = 'create-address show'
            console.log(2);
        }
        else if (className === 'create-address show') {
            className = 'create-address'
            console.log(1);
        }
        setOndisplay(!onDisplay)
    }
    return (
        <header>
            {/* <div className="menu"></div> */}
            <div className="logo">
                <Link to='/'>
                    <img className='hellokitty' src='https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/157458618_1685468311643656_2506239372571106325_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=g9AjAZpoNOQAX90k5dO&_nc_ht=scontent-sin6-1.xx&oh=bfda1986bc13c6b1d2ea60b81575c632&oe=607AEC5A' alt="" width="100px" />
                    <p>Your health, Our mission </p>
                </Link>
            </div>
            {!isAdmin && !isLogged &&
                < ul className="guest">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <Link to="/login" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={uimg} alt="" className="user-img" />
                        <div className="login-text">Login</div>
                    </Link>
                </ul>}
            {
                isLogged && !isAdmin && <ClientHeader uimg={uimg} logoutUser={logoutUser}
                    check={check} cart={cart} v={v} user={user} />
            }
            {
                isAdmin && <div className="notify" onClick={showModelNotify}>
                    <img src={bell} alt="..." />
                    {x.length > 0 && <div className="on"></div>}
                    <div className={className}>
                        <p><Link to='/history'>You have {x.length} unconfirmed orders</Link></p>
                    </div>
                </div>
            }
            <Search />
        </header >
    )
}
export default Header
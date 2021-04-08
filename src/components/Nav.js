import React from 'react'
import Logo from '../logo.png'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
    
    return (
        <div className="nav">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">            
            <img className="logo" src={Logo} alt="avilogo"/>
            </Link>
            <Link style={{position: 'absolute', right: "3%", top: "30%", textDecoration: 'none', color: 'black' }} to="/ShoppingCart">
            <FontAwesomeIcon className="cartIcon" size="2x" icon={faShoppingCart}/>
            </Link>
        </div>
    )
}

export default Nav
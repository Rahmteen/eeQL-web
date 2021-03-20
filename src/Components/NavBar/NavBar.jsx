import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { StateContext } from '../../Providers/StateProvider.jsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react'

const NavBar = () => {
    return (
        <div>
            {/* <Link to='/marketplace'>Marketplace</Link>
            <div> - </div> */}
            {/* <a href='/somefile.txt' download>Click to download</a> */}
        </div>
    )
}

export default NavBar
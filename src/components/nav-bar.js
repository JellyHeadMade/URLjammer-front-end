import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    // eslint-disable-next-line
    constructor(){
        super();
    }

    render() {
        return (
            <div className='nav-bar-wrapper'>
            <div className='nav-bar-left'>
                <NavLink className='main-title' exact to='/'>Jelly URL Jammer</NavLink>
            </div>
            <div className='nav-bar-right'>
                <NavLink className='nav-link-right-link' to='/links'> All Links</NavLink>
            </div>
        </div>
        )
    }
}
import React from 'react';
import logo from '../assets/logo.png';
import '../style/header.css';
import {FaHeart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo}></img>
            <div className='company'>
                <div className='ditagis'>
                    <span className='ditagis__D'>D</span>
                    <span>itagis</span>
                </div>
                <div className='rent'>
                    <span className='rent__R'>R</span>
                    <span>ent</span>
                </div>
            </div>
        </div>
        <NavLink to='/like' className='header__right'>
            <span className='heart'><FaHeart /></span>
            <span className='like'>Ưa thích</span>
        </NavLink>
    </div>
  )
}

export default Header
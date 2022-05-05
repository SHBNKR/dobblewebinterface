import React from 'react';
import {Navbar} from '../../common';

import hfu_logo from '../../../img/hfu_logo.png';

import './Header.css';

function Header() {


    return (
        <section  className="header">
            <section className="header-top"> 
            <img className='header-logo' src={hfu_logo}  />
                <section className="header-top__logo">
                    <a href="/" className='header-logo'>DOBBLE</a>
                </section>
                <section className='header-top__navbar'>
                    <section className='header-top__navigation'>
                     {/* Navbar */}
                     <Navbar />
                    </section>
                    <hr className='header-top__seperator'></hr>
                </section>
            </section>
            <section className='header-bottom'>
                <section className='header-bottom__phone'>
                999999
                </section>
                <section className='header-bottom__email'>
                sinan.harkci@hs-furtwangen.de
                </section>
            </section>
        </section>
    )
}

export default Header;
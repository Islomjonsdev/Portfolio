import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__container'>
                <Link className='header__home__link' to="/">
                  <span>1</span>
                </Link>

                <ul className='header__list'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <a className="navbar__list-item-link" href="/">
                        <h2>TV programme guide</h2>
                    </a>
                </li>
                <li className="navbar__list-item">
                    <a className="navbar__list-item-link" href="/">guide</a>
                </li>
                <li className="navbar__list-item">
                    <a className="navbar__list-item-link" href="/">upload</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
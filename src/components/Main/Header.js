import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {


    return(
        <div>
            <header>
                <div id="title-logo">
                    <Link to="/">Block Explorer</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/blocks'>Blocks</Link></li>
                        <li><Link to='/txs'>Transactions</Link></li>
                    </ul>
                </nav>
                <div id="search">
                    <input type="text" placeholder="search"/>
                </div>
            </header>
        </div>
    )
}

export default Header;
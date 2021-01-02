import React from 'react';

const Header = () => {


    return(
        <div>
            <header>
                <h2>Block Explore</h2>
                <nav>
                    <ul>
                        <li>Block</li>
                        <li>Transaction</li>
                    </ul>
                </nav>
                <div>
                    <input type="text" placeholder="search"/>
                </div>
            </header>
        </div>
    )
}

export default Header;
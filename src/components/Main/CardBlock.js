import React from 'react';
import {Link} from 'react-router-dom';
import './CardBlock.css';

const CardBlock = () => {
    return(
        <div className="card-section" id="card-blocks">
            <div>
                <span className="card-title">
                    Blocks
                </span>
                <Link to="/blocks" className="view-btn">View All Blocks</Link>
            </div>
            <div>
                <ul id="block-chain">
                    <li>
                        <div>111</div>
                        <div></div>
                    </li>
                    <li>
                        <div>112</div>
                        <div></div>
                    </li>
                    <li>
                        <div>113</div>
                        <div></div>
                    </li>
                    <li>
                        <div>114</div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>   
    )
}

export default CardBlock;

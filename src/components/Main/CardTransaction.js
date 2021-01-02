import React from 'react';
import {Link} from 'react-router-dom';
import './CardTransaction.css';

const CardTransaction = () => {
    
    return(
        <div className="card-section" id="card-transactions">
            <div>
                <span className="card-title">
                    Transactons
                </span>
                <Link to="/txs" className="view-btn">View All Transactions</Link>
            </div>
            <div><span>522</span> More transactions have come in</div>
            <div>
                <ul>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardTransaction;

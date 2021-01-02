import React,{Component} from 'react';
import './TotalInfo.css';

class TotalInfo extends Component {
    
    render(){
        return(
            <div>
                <section id="totalinfo-container">
                    <div id="info-container1">
                        
                    </div>
                    <div id="info-container2">
                        <div>
                            <ul>
                                <li>
                                    <div className="item">Average bloc time</div>
                                    <div className="item-value">
                                        <span>5</span> seconds
                                    </div>
                                </li>
                                <li>
                                    <div className="item">Total transations</div>
                                    <div className="item-value">18,196,939</div>
                                </li>
                                <li>
                                    <div className="item">Total blocks</div>
                                    <div className="item-value">18,996,583</div>
                                </li>
                                <li>
                                    <div className="item">Wallet Address</div>
                                    <div className="item-value">19,381,474</div>
                                </li>    
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TotalInfo;

import React,{Component} from 'react';
import CardBlock from './CardBlock';
import CardTransaction from './CardTransaction';
import './Content.css';

class Content extends Component {
    
    render(){
        return(
            <div id="content-area">
                <CardBlock />
                <CardTransaction />
            </div>
        )
    }
}

export default Content;

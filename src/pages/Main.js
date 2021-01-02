import React, {Component} from 'react';
import { TotalInfo, Content } from '../components/main';

class Main extends Component {

    render(){
        return(
            <div>
                <TotalInfo/>
                <Content/>
            </div>
        )
    }
}

export default Main
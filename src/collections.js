import React, {Component} from 'react';
import Axios from "axios";
class Collections extends Component {
    state={
        selected: null,
        collections: null, 
        rendercollections: null,
    }
    componentDidMount(){
        var result=Axios.get("https://localhost:44393/api/collections");
     this.setState({
        collections: result,
     })   
    }
    rendercollections(data){
        var collections= [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            
        }
    }
    
    render(){
        return (
            <div className="unknown">
                <header className="App-header">
                Flash Card Index
                </header> 
                <div className="App-body">
                Welcome
                </div>
          </div>
        )
    }
}
export default Collections;

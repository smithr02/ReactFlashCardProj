import React, {Component} from 'react';
import * as api from './api';
class Collections extends Component {
    state={
        selected: null,
        collections: null, 
        rendercollections: null,
    }
    componentDidMount(){
        api.Get().then((response) => {
            var result = response;
            var rendered=this.rendercollections(result);
         this.setState({
            collections: result,
            rendercollections: rendered, 
         })}, (error) =>{
             //console.log(response);
         });       
    }
    rendercollections(data){
        var collections= [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            collections.push(
                <div>
                  {data[index].title}  
                </div>
          );  
        }
    }
    
    render(){
        return (
            <div className="unknown">
                <header className="App-header">
                {this.state.rendercollections}
                </header> 
                <div className="App-body">
                Welcome
                </div>
          </div>
        )
    }
}
export default Collections;

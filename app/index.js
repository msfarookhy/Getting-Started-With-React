//react dom
import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class App extends React.Component{
    render(){
    return(
            <div>
            hello world 
            </div> 
    )
}

}



ReactDOM.render(
    <App/>,
  
    document.getElementById('content')
    
)


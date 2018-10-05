//react dom
import React from 'react';
import ReactDOM from 'react-dom';
import ListFriends from './ListFriends';
require('./index.css');



        const person =   [
            {id :1, name : 'Saif'},
            {id :2, name : 'Noor'},
            {id :3, name : 'Afzal Bhai'},
            {id :4, name : 'Nawaz Bhai'},
            {id :5, name : 'Qaiyuum Bhai'}
        ]

        class Element extends React.Component{
            render(){
                    return(
                        <ListFriends person={person}/>
                    )
            }
        }
    
  

ReactDOM.render(
    <Element/>,
   document.getElementById('content')
    
)
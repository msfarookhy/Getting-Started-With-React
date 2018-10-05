//react dom
import React from 'react';
import ReactDOM from 'react-dom';
// import ListFriends from './ListFriends';
import MoviesList from './MoviesList';
require('./index.css');



        // const person =   [
        //     {id :1, name : 'Saif'},
        //     {id :2, name : 'Noor'},
        //     {id :3, name : 'Afzal Bhai'},
        //     {id :4, name : 'Nawaz Bhai'},
        //     {id :5, name : 'Qaiyuum Bhai'}
        // ]

        // class Element extends React.Component{
        //     render(){
        //             return(
        //                 <ListFriends person={person}/>
        //             )
        //     }
        // }

        const movies = [
            { id:1,name:"Avengers"},
            { id:2,name:"Avengers2"},
            { id:3,name:"Captain America"},
            { id:4,name:"Thor"},
            { id:5,name:"Avengers infinity War"},

        ]
        class Marvel extends React.Component{
            render(){
                return(
                    <MoviesList movies={movies}/>
                )
            }
        }
    
  

ReactDOM.render(
    // <Element/>,
    <Marvel/>,
   document.getElementById('content')
    
)
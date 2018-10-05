import React from 'react' ;

// functional components
const MoviesList = function (props){
    return(
        <ol>
            {props.movies.map((list)=><li key={list.id}>{list.name}</li>)}
        </ol>
    )
}

export default MoviesList;
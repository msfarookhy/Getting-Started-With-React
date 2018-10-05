import React from 'react';
// functional components 

 const ListFriends = function (props){
     return(
        <ol>
               {props.person.map((list)=><li key={list.id}>{list.name}</li>)}
         </ol>

     )

 }





// class components
// class ListFriends extends React.Component{
//     render(){

//         return(
//             <ol>
//                {this.props.person.map((list)=><li key={list.id}>{list.name}</li>)}
//            </ol>
//         )
//     }
// }
export default ListFriends;
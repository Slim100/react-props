import React from 'react'
import image from './image.jpg';

const ChildComponent = (props) => {

    //console.log(props)
    return (
        <div>

           <img src={image} alt=""/>  
        <h1>  {props.IMG} </h1>
           <img  src={image} alt=""/>  


        </div>
    )
}
export default ChildComponent
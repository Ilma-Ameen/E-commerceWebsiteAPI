import React from 'react'; 
import "./Build.css";
import banner from '../../assets/banner.jpg'

function Build(props){
  return(
    <>
    <div className={props.cName}>
        <img className="image1" alt="builder" src={banner}/>
            <p>Welcome to our Website</p>
            <h1>SHOP WHATEVER YOU WANT</h1>
        </div>
        </>
  )
}

export default Build;
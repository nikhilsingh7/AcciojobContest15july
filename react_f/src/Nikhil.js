import React from "react";
import './Nikhil.css'

const Nikhil=(props)=>{
    const{image,title,publisher,price}=props;
    
    return(
        <div className='book'>
            <div className="book-image">
                <img className="img" src={image}/>
            </div>
            <div className="book-info">
                <h2>{title}</h2>
                <p className="book-author">By{publisher}</p>
                <p className="book-price">${price}</p>
                <button>Add to Cart</button>

            </div>
            
            
        </div>
        )
}
export default Nikhil;
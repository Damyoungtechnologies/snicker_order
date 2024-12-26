import React, {useState} from 'react'
import "./Description.css"
const Description = ({ onAddToCart }) => {
    const price = {
        // The section below is for adding the old price and new price 
        // which automatically updates
        "oldPrice" : 125.00,
        "newPrice" : 250.00
    }
    // The section below is for the state hook
    const[count, setCount] = useState(0)
    // This section controls decrement status
    const decrement=()=>{
      setCount(prev=>prev - 1)
    }
    const increment=()=>{
      setCount(prev=>prev + 1)
    }
    // This helps to add number of cart to the cart notification
    const addToCart = () => {
      if (count > 0) {
          onAddToCart(count); // Pass the count to the Header component
          setCount(0); // Reset count after adding to cart
      }
    };

  return (
    <div className='describe'>
      <h5>SNEAKER COMPANY</h5>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.
      </p>
      <div className="oldPrice">
        {/* The next line is for old price and the percentage discount */}
        <h2>${price["oldPrice"]}</h2>
        <p className='discount'>{price["oldPrice"]/price["newPrice"]*100}%</p>
      </div>
      {/* The next line is for new price and action button */}
      <div className="newPrice"><del>${price["newPrice"]}</del></div>
      <div className="actionButton">
        <div className='click'>
          <button onClick={decrement}>-</button>
          <button>{count < 0 ? 0: count}</button>
          <button onClick={increment}>+</button>
        </div>
        <button className='carter' onClick={addToCart}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg> Add to cart</button>
      </div>
    </div>
  )
}

export default Description

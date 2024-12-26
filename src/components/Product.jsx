import React, {useState} from 'react'
import "./Product.css"
import {snicker1, snicker2, snicker3, snicker4} from "../Assets"
const Product = () => {
  const images = [
    {
      key: 1,
      img: snicker1,
    }, 
    {
      key: 2,
      img: snicker2,
    }, 
    {
      key: 3,
      img: snicker3,
    }, 
    {
      key: 4,
      img: snicker4,
    }
  ]

  // The section below is the state hook for the image swap
  const[selectedimage, setselectedImage] = useState(snicker1)
  const handleImageDisplay = (event) =>{
    setselectedImage(event.target.src)
  }
  return (
    <div className='picture'>
      <div className="main_picture">
        <img src={selectedimage} alt="Snickers slideshow" />
      </div>
      <div className="picture_set">
        {images.map((image) => {
          return <img key={image.key} src={image.img} onClick={handleImageDisplay} className={`thumbnail ${selectedimage === image.img ? "Selected":""}`} alt='Product'/>
        })}
      </div>
    </div>
  )
}

export default Product


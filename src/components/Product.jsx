import React, {useState} from 'react'
import "./Product.css"
import {snicker1, snicker2, snicker3, snicker4} from "../Assets"
const Product = () => {
  const images = [
    {
      id: 1,
      img: snicker1
    }, 
    {
      id: 2,
      img: snicker2
    }, 
    {
      id: 3,
      img: snicker3
    }, 
    {
      id: 4,
      img: snicker4
    }
  ]

  // The section below is the state hook for the image swap
  const[image, setImage] = useState(images)
  const handleImageDisplay = (event) =>{
    setImage(event.target.src)
  }
  return (
    <div className='picture'>
      <div className="main_picture">
        <img src={image} alt="Snickers slideshow" />
      </div>
      <div className="picture_set">
        {images.map((image) => {
          return <img src={image.img} onClick={handleImageDisplay} alt=''/>
        })}
      </div>
    </div>
  )
}

export default Product


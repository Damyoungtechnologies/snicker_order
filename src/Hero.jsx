import React from 'react'
import "./Hero.css"
import {Product, Description} from "./components"
const Hero = () => {
  return (
    <div className='hero'>
        <div className='left_hero'><Product /></div>
        <div className='right_hero'><Description /></div>
    </div>
  )
}

export default Hero

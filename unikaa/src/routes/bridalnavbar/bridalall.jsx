import React from 'react'
import Booking from "./booknow"
import Bridal from "./homes"
import Service from "./services"
import  Mackup from "./makeup"
import Blogs from './blogs'

const bridalall = () => {
  return (
    <div>
        <Service/>
        
        <Bridal/>
        
        <Mackup/>
        <Blogs/>
        <Booking/>
    </div>
  )
}

export default bridalall
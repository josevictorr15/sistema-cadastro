import React from 'react'
import "./Header.css"
import { FaHome } from "react-icons/fa";


const Header = ( {...props} ) => {
  return (
    <>
    <header className='header d-none d-sm-flex flex-column'>
      <h1 className='mt-3'>
        <FaHome /> 
        {props.title}
      </h1>
      <p>{props.subtitle}</p>
    </header>
    </>
  )
}

export default Header
import React from 'react'
import "./Logo.css"
import logo from "../../assets/Lovepik_com-450044973-Vector Programming Icon.png"

const Logo = () => {
  return (
    <>
    <aside className='logo'>
        <a href="/" className="logo">
            <img src={logo} alt="Logo da aplicação" />
        </a>
    </aside>
    </>
  )
}

export default Logo
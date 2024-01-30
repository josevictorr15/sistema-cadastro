import React from 'react'
import "./Logo.css"
import logo from "../../assets/Lovepik_com-450044973-Vector Programming Icon.png"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
    <aside className='logo'>
        <Link href="/" className="logo">
            <img src={logo} alt="Logo da aplicação" style={{width: "130px", height: "130px"}}/>
        </Link>
    </aside>
    </>
  )
}

export default Logo
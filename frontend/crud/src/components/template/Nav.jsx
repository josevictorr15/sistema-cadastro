import React from 'react'
import "./Nav.css"
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Nav = () => {
  return (
    <>
    <aside className="menu-area">
      <nav className="menu">
        <a href="#">
          <FaHome/> <h4>Inico</h4>
        </a>
        <a href="#/users">
          <FaUsers/> <h4>Usuários</h4>
        </a>
      </nav>
    </aside>
    </>
  )
}

export default Nav
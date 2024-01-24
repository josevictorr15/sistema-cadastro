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
          <FaHome/>
          <p>Inico</p>
        </a>
        <a href="#/users">
          <FaUsers/>
          <p>Usuários</p>
        </a>
      </nav>
    </aside>
    </>
  )
}

export default Nav
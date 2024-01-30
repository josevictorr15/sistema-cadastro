import React from 'react'
import "./Nav.css"
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <FaHome/>
          <p>Inico</p>
        </Link>
        <Link to="/users">
          <FaUsers/>
          <p>Usuários</p>
        </Link>
      </nav>
    </aside>
    </>
  )
}

export default Nav
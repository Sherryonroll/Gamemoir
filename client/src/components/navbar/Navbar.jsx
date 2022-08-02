import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="gamemoir__navbar">
      <Link to="/">
        <img className="h-13 w-40" src={logo} />
      </Link>

      <div className="gamemoir__navbar-button">
        <div className="gamemoir__navbar-signup ">
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-300 hover:text-indigo-400">
            <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="gamemoir__navbar-login">
          <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/register">Sign Up</Link>
            </span>
          </button>
        </div>
      </div>
      <div className="gamemoir__navbar-hamburger ">
        {toggleMenu ? (
          <RiCloseLine
            className=" rounded-sm bg-gradient-to-br from-purple-600 to-blue-500"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="rounded-sm bg-gradient-to-br from-purple-600 to-blue-500"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gamemoir__navbar-hamburger_container scale-up-center">
            <div className="gamemoir__navbar-hamburger_signup ">
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-300 hover:text-indigo-400">
                <Link to="/login">Login</Link>
              </p>
            </div>
            <div className="gamemoir__navbar-hamburger_login">
              <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <Link to="/register">Sign Up</Link>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

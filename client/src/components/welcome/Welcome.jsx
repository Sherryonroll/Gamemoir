import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'
const Article = () => {
  return (
    <div className="gamemoir__dashboard scale-up-center">
      <div className="welcome">
        Welcome back,
        <span className="user text-transparent bg-clip-text bg-gradient-to-bl from-[#3e41b3] to-[#e242c2]">
          Username
        </span>
      </div>
      <div className="logout">
        <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/">Log Out</Link>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Article

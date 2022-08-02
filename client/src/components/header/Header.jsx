import React from 'react'
import './header.css'
import gamepad from '../../assets/header-image.png'
import Text from '../../animation/text/Text'

const Header = () => {
  return (
    <div className="gamemoir__header ">
      {/* <img className="lines" src={lines} /> */}
      <div className="gamemoir__header-content">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-bl from-[#3e41b3] to-[#e242c2] ">
          Gamemoir an extensive experience for <Text />
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-300">
          The most innovative and adaptable platform in the world of gaming
        </p>
        <div className="gamemoir__header-content__search">
          <input type="email" placeholder="Search User"></input>

          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-r-lg text-gray-900   group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span class="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white rounded-r-md  dark:bg-gray-900  group-hover:bg-opacity-0">
              Search
            </span>
          </button>
        </div>
      </div>
      <div className="gamemoir__header-image scale-up-center">
        <img src={gamepad} alt="header image"></img>
      </div>
    </div>
  )
}

export default Header

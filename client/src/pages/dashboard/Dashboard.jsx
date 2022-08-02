// import Welcome from './components/welcome/Welcome'
import { Shome, Sstar } from '../../pages/dashboard/Svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Create from '../../components/create/Create'
import Post from '../../components/posts/Post'
// import SideNav from '../../components/sidenav/SideNav'
import Welcome from '../../components/welcome/Welcome'
import icon from '../../assets/icon.png'
import './dashboard.css'
function Dashboard() {
  const [createPost, setCreatePost] = useState(false)
  const [showPost, setShowPost] = useState(true)
  const [isList, setIsList] = useState(3)
  const onclickevent = () => {
    setIsList(1)
    setShowPost(!showPost)
  }
  return (
    <div className="dashboard">
      {/* <SideNav /> */}

      <nav className="gamemoir__sidenav">
        {/* <Link to="/"> */}
        <img className="logo" src={icon} />
        {/* </Link> */}

        <div className="menu">
          <Shome
            // onClick={() => setIsList(1)}
            onClick={() => onclickevent()}
            clas={`icon_list ${isList === 1 && 'active'}`}
          />

          <Sstar
            // onClick={()=> setIsList(2)}
            onClick={() => onclickevent()}
            clas={`icon_list ${isList === 2 && 'active'}`}
          />
        </div>
      </nav>
      <Welcome />

      {showPost ? <Post /> : <Create />}
      {/* {createPost && <Create />} */}
      {/* <Outlet /> */}
    </div>
  )
}

export default Dashboard

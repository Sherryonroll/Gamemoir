// // import React, { useState } from 'react'
// import { useState } from 'react'
// import { Shome, Sstar } from '../../pages/dashboard/Svg'
// import icon from '../../assets/icon.png'
// import Create from '../create/Create'

// import './nav.css'

// function Nav() {
//   const [createPost, setCreatePost] = useState(false)
//   const [isList, setIsList] = useState(3)
//   return (
//     <nav className="gamemoir__sidenav">
//       {/* <Link to="/"> */}
//       <img className="logo" src={icon} />
//       {/* </Link> */}

//       <div className="menu">
//         <Shome
//           onClick={() => setIsList(1)}
//           clas={`icon_list ${isList === 1 && 'active'}`}
//         />

//         <Sstar
//           onClick={() => setIsList(2) && setCreatePost(true)}
//           clas={`icon_list ${isList === 2 && 'active'}`}
//         />
//         {createPost === true && <Create />}
//       </div>
//     </nav>
//     // <Welcome/>
//   )
// }

// export default Nav

import React from 'react'
import Home from './pages/users/pages/Home'
// import Profile from './pages/users/pages/profile'
import Blog from './pages/users/pages/Blog'
import Aboutus from './pages/users/pages/Aboutus'
import Contact from './pages/users/pages/Contact'
import Shop from './pages/users/pages/Shop'
import { Route,Routes } from 'react-router-dom'
import Profile from './pages/users/pages/Profile'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
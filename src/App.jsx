import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

import React from 'react'

const App = () => {
  return (
    <div className="halaman m-0 p-0">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="sidebar">
      <Sidebar/>
      <div className="dashboard--content">
        <Content/>
      </div>
    </div>
    </div>
    
  )
}

export default App

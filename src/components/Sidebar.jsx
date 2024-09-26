// import react-icons //
import {BiHome} from 'react-icons/bi';
import { FaUserGroup } from "react-icons/fa6"; 
import { AiFillLayout } from "react-icons/ai";
// ================== //

import React from 'react'

const Sidebar = () => {
  return (
    <div className='menu mt-8'>

        <div className='menu--list'>
            <a href="#" className="item-active">
                <img src="images/icon-home.png" alt="iconhome" />
                {/* <BiHome/> */}
                Beranda
            </a>
            <a href="#" className="item">
                <img className='iconsidebar' src="images/icon-group.png" alt="icongroup" />        
                {/* <FaUserGroup/> */}
                Grup
            </a>
            <a href="#" className="item">
                <img className='iconsidebar' src="images/icon-activity.png" alt="iconactivity" />
                {/* <AiFillLayout/> */}
                Aktivitas
            </a>
        </div>
    </div>
  )
}

export default Sidebar

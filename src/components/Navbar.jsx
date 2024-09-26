import React from 'react';
import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="navbar-box flex">
                <div className="logo">
                    <h2>Logo + Nama Website</h2>
                </div>
                <div className="icon-account">
                    <FaRegCircle/>
                    <h2>Jennifer Gracia</h2>
                    <IoIosArrowDown/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
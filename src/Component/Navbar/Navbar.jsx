import React from 'react';
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { NavLink } from 'react-router';


const Navbar = () => {
    const link = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-white bg-[#244d3f] font-semibold" : " "}><FaHome /> Home</NavLink></li>
        <li><NavLink to={'/timeline'} className={({ isActive }) => isActive ? "text-white bg-[#244d3f] font-semibold" : " "}><RiTimeLine /> Timeline</NavLink></li>
        <li><NavLink to={'/states'} className={({ isActive }) => isActive ? "text-white bg-[#244d3f] font-semibold" : ""}><FaChartLine /> Stats</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className='container mx-auto flex justify-between items-center'>
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl font-bold">KeenKeeper</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {link}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
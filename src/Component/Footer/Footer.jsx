import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='mt-20 bg-[#244d3f] pt-20 pb-5'>
            <div className='w-[60%] mx-auto text-white flex flex-col justify-center items-center text-center space-y-3'>
                <h1 className='text-6xl font-bold'>KeenKeeper</h1>
                <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='text-lg'>Social Links</h2>
                <div className='flex gap-2'>
                    <span className='bg-gray-200 p-2 rounded-full text-black'><FaInstagramSquare /></span>
                    <span className='bg-gray-200 p-2 rounded-full text-black'><FaFacebookSquare /></span>
                    <span className='bg-gray-200 p-2 rounded-full text-black'><FaXTwitter /></span>
                </div>
            </div>
            <hr className='w-[60%] mx-auto my-8 border-gray-500'/>
            <div className='w-[60%] mx-auto flex justify-between items-center'>
                <p  className='text-sm text-gray-300'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-5'>
                    <p className='text-sm text-gray-300'>Privacy Policy</p>
                    <p className='text-sm text-gray-300'>Terms of Service</p>
                    <p className='text-sm text-gray-300'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
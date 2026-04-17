import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col justify-center items-center text-center mt-20 mb-10 space-y-5'>
                <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-sm font-medium text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='flex justify-center items-center bg-[#244d3f] text-white px-3 py-3 rounded-sm text-sm font-semibold'><IoMdAdd className='mr-1' /> Add a Friend</button>
            </div>
            <div className='w-[60%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className="card bg-base-100 shadow-md p-10 text-center space-y-2">
                    <h2 className='text-3xl font-semibold text-[#244d3f]'>10</h2>
                    <p className='text-sm text-gray-500'>Total Friends</p>
                </div>

                <div className="card bg-base-100 shadow-md p-10 text-center space-y-2">
                    <h2 className='text-3xl font-semibold text-[#244d3f]'>3</h2>
                    <p className='text-sm text-gray-500'>On Track</p>
                </div>

                <div className="card bg-base-100 shadow-md p-10 text-center space-y-2">
                    <h2 className='text-3xl font-semibold text-[#244d3f]'>6</h2>
                    <p className='text-sm text-gray-500'>Need Attention</p>
                </div>

                <div className="card bg-base-100 shadow-md p-10 text-center space-y-2">
                    <h2 className='text-3xl font-semibold text-[#244d3f]'>12</h2>
                    <p className='text-sm text-gray-500'>Interactions This Month</p>
                </div>
            </div>

            <hr className='w-[60%] mx-auto my-10 border-gray-200'/>
        </div>
    );
};

export default Banner;
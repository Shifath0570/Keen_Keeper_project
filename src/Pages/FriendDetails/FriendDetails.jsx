import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdOutlineArchive } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareText } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { FriendContext } from '../../ContextApi/FriendProvider';
import { toast } from 'react-toastify';


const FriendDetails = () => {




    const { id } = useParams()
    const friends = useLoaderData()

    const expectedFriend = friends.find(friend => friend.id == id)
    const { picture, name, tags, status, bio, email, days_since_contact, goal, next_due_date } = expectedFriend

    const { addEntry } = useContext(FriendContext)
    const handleAction = (type) => {
        addEntry(type, name);
        toast.success(`${name} is ${type} for you....`);
    };


    return (

        <div className='w-[60%] mx-auto my-20 grid grid-cols-1 lg:grid-cols-9 gap-5'>
            <div className='col-span-3 row-span-2'>
                <div className="card bg-base-100 shadow-md p-5 text-center space-y-1 flex flex-col justify-center items-center">
                    <img src={picture} alt="" className='h-12 w-12 rounded-full' />
                    <h2 className='text-xl font-semibold text-[#244d3f]'>{name}</h2>
                    <p className='text-xs'>{status}</p>
                    <div className='flex gap-2'>
                        {
                            tags.map((tag, ind) => <p key={ind} className='bg-[#cbfadb] p-2 text-xs rounded-2xl text-[#244d3f] font-semibold'>{tag}</p>)
                        }
                    </div>
                    <p className='text-xs font-semibold text-gray-400'>"{bio}"</p>
                    <p className='text-xs'>{email}</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-md text-center space-y-2 col-span-2 row-span-1 justify-center items-center p-2">
                <h2 className='text-3xl font-semibold text-[#244d3f]'>{days_since_contact}</h2>
                <p className='text-sm text-gray-500'>Days Since Contact</p>
            </div>

            <div className="card bg-base-100 shadow-md text-center space-y-2 col-span-2 row-span-1 justify-center items-center p-2">
                <h2 className='text-3xl font-semibold text-[#244d3f]'>{goal}</h2>
                <p className='text-sm text-gray-500'>Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow-md text-center space-y-2 col-span-2 row-span-1 justify-center items-center p-2">
                <h2 className='text-3xl font-semibold text-[#244d3f]'>{next_due_date}</h2>
                <p className='text-sm text-gray-500'>Next Due</p>
            </div>

            <div className="card bg-base-100 shadow-md text-center space-y-2 col-span-6 row-span-1 justify-center items-start p-5">
                <h2 className='text-lg font-medium text-[#244d3f]'>Relationship Goal</h2>
                <p className='text-sm text-gray-500'>Connect every <span className='text-md text-black font-semibold'>{goal} days</span></p>
            </div>

            <div className='col-span-3 row-span-3 space-y-2'>
                <div className="card bg-base-100 shadow-md p-2 text-center space-y-2 col-span-1 row-span-1">
                    <p className='text-md font-medium text-gray-700 flex justify-center items-center gap-2'> <RiNotificationSnoozeLine />Snooze 2 weeks</p>
                </div>

                <div className="card bg-base-100 shadow-md p-2 text-center space-y-2 col-span-1 row-span-1">
                    <p className='text-md font-medium text-gray-700 flex justify-center items-center gap-2'> <MdOutlineArchive />Archive</p>
                </div>

                <div className="card bg-base-100 shadow-md p-2 text-center space-y-2 col-span-1 row-span-1">
                    <p className='text-md font-medium text-red-600 flex justify-center items-center gap-2'> <RiDeleteBin5Line />Delete</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-md text-center space-y-2 col-span-6 row-span-3 justify-center items-start p-5 ">
                <h2 className='text-lg font-medium text-[#244d3f]'>Quick Check-In</h2>
                <div className='flex space-x-15'>
                    <Link onClick={() => handleAction("Call")} className='inset-shadow-sm space-y-2 py-5 px-20 rounded-lg flex flex-col justify-center items-center'>
                        <FiPhoneCall />
                        <p>Call</p>
                    </Link>
                    <Link onClick={() => handleAction("Text")} className='inset-shadow-sm space-y-2 py-5 px-20 rounded-lg flex flex-col justify-center items-center'>
                        <LuMessageSquareText />
                        <p>Text</p>
                    </Link>
                    <Link onClick={() => handleAction("Video")} className='inset-shadow-sm space-y-2 py-5 px-20 rounded-lg flex flex-col justify-center items-center'>
                        <IoVideocamOutline />
                        <p>Video</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    const {id, picture, name, goal, tags, status} = friend

    const handleStatusColor=()=>{
        if(status == "overdue"){
            return "bg-red-500 py-1 px-2 text-white rounded-full"
        }
        else if(status == "on_track"){
            return "bg-[#244d3f] py-1 px-2 text-white rounded-full"
        }
        else if(status == "due_soon"){
            return "bg-yellow-500 py-1 px-2 text-white rounded-full"
        }
    }
    return (
        <div>
            <Link to={`/friendDetails/${id}`} className="card bg-base-100 shadow-md p-10 text-center space-y-2 flex flex-col justify-center items-center">
                <img src={picture} alt="" className='h-12 w-12 rounded-full'/>
                <h2 className='text-2xl font-semibold text-[#244d3f]'>{name}</h2>
                <p className='text-sm text-gray-500'>{goal}d ago</p>
                <div className='flex gap-2'>
                    {
                        tags.map((tag, ind)=> <p key={ind} className='bg-[#cbfadb] p-2 text-sm rounded-2xl text-[#244d3f] font-semibold'>{tag}</p>)
                    }
                </div>
                <p className={`text-sm ${handleStatusColor(status)}`} >{status}</p>
            </Link>
        </div>
    );
};

export default FriendCard;
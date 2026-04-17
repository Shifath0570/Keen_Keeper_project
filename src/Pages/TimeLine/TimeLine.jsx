import React, { useContext, useState } from 'react';
import { FriendContext } from '../../ContextApi/FriendProvider';
import { IoCall } from "react-icons/io5";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";


const TimeLine = () => {

    const { timeline } = useContext(FriendContext)

    const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" ? timeline : timeline.filter(item => item.type === filter);

    const handleIcon = (type) => {
        if (type == "Call") {
            return <IoCall className='text-red-900' />
        }
        else if (type == "Text") {
            return <BsChatSquareTextFill className='text-yellow-500' />
        }
        else if (type == "Video") {
            return <FaVideo className='text-cyan-600' />
        }
    }
    

    return (
        <div className='w-[60%] mx-auto my-20 space-y-5'>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1" onClick={()=> setFilter("all")}>All</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> setFilter("Call")}><a>Call</a></li>
                    <li onClick={()=> setFilter("Text")}><a>Text</a></li>
                    <li onClick={()=> setFilter("Video")}><a>Video</a></li>
                </ul>
            </div>

            <div className='space-y-5'>
                {
                    filteredData.length == 0 ? <div className='h-96 bg-gray-300 flex justify-center items-center rounded-2xl'><p className='text-2xl font-semibold'>Data Is Not Found</p></div> :
                    filteredData.map(item =>
                        <div className="bg-base-100 shadow-md space-y-2 p-5 flex justify-start items-center gap-5">
                            <div className='text-2xl'>
                                {handleIcon(item.type)}
                            </div>
                            <div>
                                <h2 className='text-lg font-medium text-[#244d3f] space-x-2'><span className='font-semibold'>{item.type}</span>{item.title}</h2>
                                <p className='text-sm text-gray-500'>{item.date}</p>
                            </div>
                        </div>)
                }
            </div>



        </div>
    );
};

export default TimeLine;
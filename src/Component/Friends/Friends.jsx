import React, { use } from 'react';
import FriendCard from '../FriendCard/FriendCard';
import FriendProvider from '../../ContextApi/FriendProvider';

const friendPromise = fetch('/friends.json').then(res=> res.json())

const Friends = () => {

    const friends = use(friendPromise)
    
    return (
        <div className='w-[60%] mx-auto'>
            <h2 className='text-xl font-semibold'>Your Friends</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>

        </div>
    );
};

export default Friends;
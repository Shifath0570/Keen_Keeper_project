import React, { createContext, useState } from 'react';

export const FriendContext = createContext()


const FriendProvider = ({ children }) => {

    const [timeline, setTimeline] = useState([])

    const addEntry = (type, name) => {
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            type,
            title: ` With ${name}`
        }
        setTimeline((prev) => [...prev, newEntry])
    }

    


    const data = {

        timeline,
        setTimeline,
        addEntry,

    }
    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;
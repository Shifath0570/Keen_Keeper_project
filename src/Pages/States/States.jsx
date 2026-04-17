import React, { useContext } from 'react';
import { FriendContext } from '../../ContextApi/FriendProvider';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const States = () => {

    const { timeline } = useContext(FriendContext)

    const data = [
        { name: "Call", value: timeline.filter(t => t.type === "Call").length },
        { name: "Text", value: timeline.filter(t => t.type === "Text").length },
        { name: "Video", value: timeline.filter(t => t.type === "Video").length }
    ];

    const colors = {
        Call: "#3B82F6",
        Text: "#10B981",
        Video: "#F59E0B"
    };


    return (
        <div className='w-[60%] mx-auto my-10 flex justify-center items-center'>
            <div>
                <h1 className="text-2xl mb-4">Conversation Analytics</h1>

                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="value" outerRadius={150} label>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={colors[entry.name]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default States;
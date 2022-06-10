
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);

    const COLORS = ['c40c06', '#e0792f', '##e0d22f', '##19b52c', '#2522d4'];

    useEffect(() => {
        setData(() => getData());
    }, [events]);

    // const getData = () => {
    //     const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    //     const data = genres.map((genre) => {
    //         const value = events.filter(({ summary }) =>
    //             summary.split(' ').includes(genre)
    //         ).length;

    //         return { name: genre, value };
    //     });
    //     return data;
    // };

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

        const data = genres.map((genre) => {
            const value = events.filter(event => event.summary.split(' ').includes(genre)).length
            return { "genre": genre, "value": value };
        })
        return data;
    }
    console.log("EventGenre");

    return (
        <ResponsiveContainer height="400">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    label={({ genre, percent }) => `${genre} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;
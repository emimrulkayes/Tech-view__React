import React, { useState, useEffect, useRef } from 'react'
import Header from '../Header/Header'
import './dasshboard.css'
import Footer from '../footer/Footer'

import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, ComposedChart, Area } from 'recharts';

const data = [
    { month: 'Mar', investement: 100000, sell: 241, revenue: 10401 },
    { month: 'Apr', investement: 200000 },
    { sell: '423', revenue: 24500 },
    { month: 'May', investement: 500000, sell: 726, revenue: 67010 },
    { month: 'Jun', investement: 500000, sell: 529, revenue: 40405 },
    { month: 'Jul', investement: 600000, sell: 601, revenue: 50900 },
    { month: 'Aug', investement: 700000, sell: 670, revenue: 6100 },
];

export default function Dashboard(props) {

    return (
        <div>
            <Header />

            <div className='dash'>
                <h1>
                    User Monthly Sallery
                </h1>
            </div>
            <div className='charts_ja'>
                <div>
                    <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="investement" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                    </LineChart>
                </div>
                <div>
                    <ComposedChart width={730} height={400} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investement" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
            <Footer />
        </div>
    )
}

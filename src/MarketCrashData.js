// src/MarketCrashData.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketCrashData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://https-github-com-svmlstmganproject.onrender.com/getMarketCrashData');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>Market Crash Data</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Peak Row</th>
                        <th>Peak Day</th>
                        <th>Peak Price</th>
                        <th>Crash End Row</th>
                        <th>Crash End Day</th>
                        <th>Crash End Price</th>
                        <th>Crash Duration</th>
                        <th>Crash Size</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.no_}</td>
                            <td>{item.peakRow}</td>
                            <td>{item.peakDay}</td>
                            <td>{item.peakPrice}</td>
                            <td>{item.crashEndRow}</td>
                            <td>{item.crashEndDay}</td>
                            <td>{item.crashEndPrice}</td>
                            <td>{item.crashDuration}</td>
                            <td>{item.crashSize}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarketCrashData;

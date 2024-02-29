import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './Action';

export default function Apizz() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/items');
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        data.forEach(item => {
            dispatch(addItem(item));
        });
    }, [data, dispatch]);

    return (
        <div></div>
    );
}

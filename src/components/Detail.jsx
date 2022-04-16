import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Detail() {
    const navigate = useNavigate();    
    const [data, setData] = useState([]);
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (token === null) {
            navigate('/');
        }
        }, [navigate]);

    return (
        <></>
    )
};

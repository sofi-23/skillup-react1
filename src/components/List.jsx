import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function List() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token === null) {
            navigate('/');
        }
        }, []);
    return (
        <><h1>I'm a list</h1></>
    )
};

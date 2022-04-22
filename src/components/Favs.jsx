import { useState, useEffect } from "react";

export default function Favs() {
    const [favs, setFavs] = useState([]);
    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')
        if (favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal)
            setFavs(favsArray)
        }
    }, []);
    
    return (
        <>
        <h1>My favorites</h1>
        {favs !== [] ?
            favs.map((fav) => {
                return (
                    <div key={fav.id}>
                        <h1>{fav.title}</h1>
                        <img src={fav.imgUrl}/>
                    </div>
                )})
            
        :
        <h5>No favs</h5>
        }</>
    )
};

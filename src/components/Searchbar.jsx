import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


export default function Searchbar() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value 
        console.log(keyword)
        if(keyword.trim().length === 0){
            swAlert(<h3>You have to write something...</h3>)
        } else if (keyword.trim().length < 4) {
            swAlert(<h3>You have to write at least 4 characters...</h3>)
        }else {
            e.currentTarget.keyword.value = ''
            navigate(`/results?keyword=${keyword}`)
        }
    }
    return(
        <>
        <div className="d-flex">
            <form onSubmit={handleSubmit}>
                <div className="form-group d-flex">
                    <input name="keyword" type="text" className="form-control" placeholder="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
                
            </form>
        </div>
        </>
    )
};

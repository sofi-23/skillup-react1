import { Link } from 'react-router-dom';
import Searchbar  from './Searchbar.jsx'

export default function Header() {
    return (
        <header>
            <nav className="d-flex justify-content-between">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/favs">Favs</Link>
                    </li>
                </ul>
                <Searchbar />
            </nav>
        </header>
    )
};

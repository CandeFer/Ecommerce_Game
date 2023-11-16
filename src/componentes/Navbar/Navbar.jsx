/* eslint-disable react-hooks/exhaustive-deps */
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useContext} from 'react'
import { urlG, urlS } from '../url'
import { ApiContext } from '../../Context/Api.jsx'
import SearchTool from '../Search/Search.jsx'


function Navbar() {

    const [writing, setWriting] = useState()
    const { apiUrl,  updateApi  } = useContext(ApiContext)

    const Write = (e) => {

        setWriting(e.target.value)
        console.log(writing)

    }

    const Search = () => {
            if (writing === '') {
                updateApi(urlG)
            } else {
                updateApi(urlS + writing)
            }
            setWriting('')
        console.log(apiUrl)
    }

    return (
        <>
            <nav className="navbar">
                <ul className="left-section">
                    <li><Link to='/Tags'>Tags</Link></li>
                    <li><Link to='/Developers'>Developers</Link></li>
                    <li><Link to='/'>Games</Link></li>
                </ul>

                <SearchTool Write={Write} Search={Search}/>
                {/* <div className="search-box">
                    <input type="text" onChange={Write} placeholder="Search" />
                    <button onClick={Search}>Search</button>
                </div> */}

                <ul className="right-section">
                    <li><a href="#"><i className="bi bi-cart"></i></a></li>
                    <li><a href="#"><i className="bi bi-heart-fill"></i></a></li>
                    <li><a href="#"><i className="bi bi-person-circle"></i></a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;


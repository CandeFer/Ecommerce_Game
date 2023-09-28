import './Navbar.css'
import { Link } from 'react-router-dom'
// import { useState } from 'react'


function Navbar() {

    // const [quest, setquest] = useState("")

    // const quest = (e) => {
    //     setSearch(e.target.value)
    // }

    return (
        <>
            <nav className="navbar">
                <ul className="left-section">
                    <li><Link to='/Tags'>Tags</Link></li>
                    <li><Link to='/Developers'>Developers</Link></li>
                    <li><Link to='/'>Games</Link></li>
                </ul>

                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>

                <ul className="right-section">
                    <li><a href="#"><i className="bi bi-cart"></i></a></li>
                    <li><a href="#"><i className="bi bi-heart-fill"></i></a></li>
                    <li><a href="#"><i className="bi bi-person-circle"></i></a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar


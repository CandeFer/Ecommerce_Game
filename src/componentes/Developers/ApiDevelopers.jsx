import { useEffect, useState } from "react"
import Developers from "./Developers"
import { urlDe } from "../url"
import Navbar from "../Navbar/Navbar.jsx"


function ApiDevelopers() {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch(urlDe)
            .then((response) => response.json())
            .then((data) => setDevelopers(data.results))
            .catch((err) => console.log(err))
    }, [])
   

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div>
            <Developers developers={developers} />
            </div>
        </>

    )
}

export default ApiDevelopers
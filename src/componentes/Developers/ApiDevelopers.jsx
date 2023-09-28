import { useEffect, useState } from "react"
import Developers from "./Developers"
import { urlDe } from "../url"


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
            <div>
            <Developers developers={developers} />
            </div>
        </>

    )
}

export default ApiDevelopers
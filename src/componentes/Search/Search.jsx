import { useState,useEffect } from "react";
import { urlG } from "../url";


const Search = () => {

    const [search, setSearch] = useState([])


useEffect(()=>{
    fetch(urlG + '&search=halo')
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((err) => console.log(err))
},[])






    return (
        <div>
            <h1>Pruebita del search</h1>
        </div>
    );
};

export default Search;
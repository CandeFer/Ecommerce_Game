import { useState, useEffect } from "react";
import { urlG } from "../url";
import 'boxicons';


const SearchTool = ({ Search, Write }) => {

    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch(urlG + '&search=halo')
            .then((response) => response.json())
            .then((data) => setSearch(data))
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        // Función para actualizar el estado del ancho de la pantalla
        const updateWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Agregué un event listener para detectar cambios en el tamaño de la pantalla
        window.addEventListener('resize', updateWidth);

        // Limpieza: remover el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', updateWidth);
        };

    }, []);




    return (
        <>
            {
                screenWidth < 650
                    ?
                    <box-icon name='search' color='#ffffff' ></box-icon>
                    :
                    <>
                        <div className="search-box">
                            <input type="text" onChange={Write} placeholder="Search" />
                            <button onClick={Search}>Search</button>
                        </div>
                    </>
            }
        </>
    );
};

export default SearchTool;
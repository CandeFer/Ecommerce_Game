/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Games.css';
import { useState } from "react";
import DescriptionG from './DescriptionG';
import { Link } from 'react-router-dom'


const Games = ({ games }) => {
    // console.log(games);
    const [search, setSearch] = useState("")


    const Search = (e) => {
        setSearch(e.target.value)
    }

    const results = !search
        ? games
        : games.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLowerCase())
        );

    const iconos = (platform) => {
        switch (platform.name) {
            case 'PC':
                return <li key={platform.id}><i className="bi bi-windows"></i></li>;
            case 'Android':
                return <li key={platform.id}><i className="bi bi-android2"></i></li>;
            case 'Xbox':
                return <li key={platform.id}><i className="bi bi-xbox"></i></li>;
            case 'Apple Macintosh':
                return <li key={platform.id}><i className="bi bi-apple"></i></li>;
            case 'PlayStation':
                return <li key={platform.id}><i className="bi bi-playstation"></i></li>;
            case 'Nintendo':
                return <li key={platform.id}><i className="bi bi-nintendo-switch"></i></li>;
            default:
                return null;
        }
    };





    return (
        <>
            <div className='games'>
                {results.map((game) => (
                    <div className='card' key={game.id}>
                        <img src={game.background_image} alt="" />
                        <div className='card-data'>
                            <div className='nombre_iconos'>
                                <h3>{game.name}</h3>
                                <div className='platforms'>
                                    <ul>
                                        {
                                            (game.parent_platforms).map((plat) => (
                                                iconos(plat.platform)
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='description'>
                                {
                                    <DescriptionG id={game.id} />
                                }
                                <button><Link className='detalle' to={`/detailgame/${game.id}`}>Details</Link></button>
                            </div>
                            {
                                (
                                    <h4>Genres: <samp>{game.genres.map((gen) => gen.name).join(', ')}</samp></h4>
                                )
                            }
                            
                            <div className='button'>
                                <button><i className="bi bi-currency-dollar"></i>Buy</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default Games

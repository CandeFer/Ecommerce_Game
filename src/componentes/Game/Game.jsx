/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './Game.css'
import { useState, useEffect } from "react";

const Game = () => {
    const [game, setGame] = useState({})
    const currentUrl = window.location.href
    const id = currentUrl.split('/').pop()



    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=77de9fb94b994de394a6196e63d31851`)
            .then((response) => response.json())
            .then((data) => setGame(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    console.log(game)
    console.log('Paso')

    return (

        <div className='game' key={game.id}>
            <div className='imgs'>
            <img src={game.background_image} alt="" />
            <img src={game.background_image_additional} alt="" />
            </div>
            <h3>{game.name}</h3>
            <p>{game.description_raw}</p>
            <a href={game.website}>Website</a>

            {
                game.platforms && game.platforms.map((platform, index) => (
                    <div className='requirements' key={index}>
                        <h4>{platform.requirements.recommended}</h4>
                        <h4>{platform.requirements.minimum}</h4>

                    </div>
                ))
            }



        </div>
    );
};

export default Game;

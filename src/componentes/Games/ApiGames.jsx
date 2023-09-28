/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Games from "./Games";
import Pages from "../Pagination/Pages";
import Filtro from "../Filtro/Filtro";
import { urlG } from "../url";



function ApiGames() {
  const [url, setUrl] = useState(urlG);
  const [games, setGames] = useState([]);
  const [data, setData] = useState([]);
  

  const fetchData = (newUrl) => {
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setGames(data.results);
        setUrl(newUrl);
      })
      .catch((err) => console.log(err));
  };


  const handleNextPage = () => {
    if (data.next) {
      fetchData(data.next);
    }
  };


  const handlePrevPage = () => {
    if (data.previous) {
      fetchData(data.previous);
    }
  };

  useEffect(() => {
    if (games.length === 0) {
      fetchData(url);
    }
  }, [games, url]);
  
 


  return (
    <>
      <main>
        {
          games ?
            (
              <div className="fyg">
                <Filtro fetchData ={fetchData }/>
                <div className="gyb">
                <Games games={games} />
                <Pages data={data} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
                </div>
              </div>) :
            <p>Cargando</p>
        }
      </main>
    </>
  );
}

export default ApiGames;
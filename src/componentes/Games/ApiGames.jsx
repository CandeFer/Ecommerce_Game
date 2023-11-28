/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import Games from "./Games";
import Pages from "../Pagination/Pages";
import Filtro from "../Filtro/Filtro";
import FiltroMobile from "../Filtro/FiltroMobile";
import { ApiContext } from "../../Context/Api";

function ApiGames() {
  const { apiUrl, updateApi } = useContext(ApiContext);
  const [games, setGames] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = (newUrl) => {
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setGames(data.results);
        // Actualiza el contexto solo después de obtener los datos
        updateApi(newUrl);
      })
      .catch((err) => console.log(err));
  };

  const handleNextPage = () => {
    if (data.next) {
      fetchData(data.next);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevPage = () => {
    if (data.previous) {
      fetchData(data.previous);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  return (
    <main>
      {games ? (
        <>
          <div className="fyg">
            <FiltroMobile fetchData={fetchData}/>
            <Filtro fetchData={fetchData} />
            <div className="gyb">
              <Games games={games} />
              <Pages data={data} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
            </div>
          </div>
        </>
      ) : (
        <p>Cargando</p>
      )}
    </main>
  );
}

export default ApiGames;

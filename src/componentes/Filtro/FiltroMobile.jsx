import { useRef, useState } from 'react'
import './Filtro.css'
import Filtro from './Filtro';

const FiltroMobile = ({fetchData}) => {

  const [showFilters, setShowFilters] = useState(false);

  const filterMobileRef = useRef(null);

  const show = ()=>{
    setShowFilters(!showFilters);
    if (filterMobileRef.current) {
      filterMobileRef.current.classList.toggle('open');
    }
  }

  return (
    <>
      <button className="mobileFilterBtn" onClick={show}>Filtros</button>
      {showFilters && (
        <Filtro fetchData={fetchData} showFilters={showFilters}/>
      )}
    </>
  )
}

export default FiltroMobile
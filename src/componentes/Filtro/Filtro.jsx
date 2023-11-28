/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { urlG } from '../url';
import './Filtro.css'

function CheckboxList({ title, items, fetchData }) {
  const [checkboxes, setCheckboxes] = useState({});
  const [ids, setIds] = useState('');
  const [changes, setChanges] = useState(false);
 
  useEffect(() => {
    if (changes) {
      setChanges(false);
      console.log(ids)
      fetchData(urlG + ids);
    }
  }, [ids, fetchData]);
  

  const handleCheckboxChange = (item) => {
    setCheckboxes({
      ...checkboxes,
      [item.title]: !checkboxes[item.title],
    });
    filter(item, !checkboxes[item.title]);
  };

  const filter = (item, checkbox) => {
    if (checkbox === true && item.category === 'genres') {
      ids.length === 0 ? setIds(`&genres=${item.id}`) : setIds(ids + `,${item.id}`);
    } else if (checkbox === false && item.category === 'genres') {
      let newIds = ids;
      if (ids.includes(`=${item.id},`)) {
        newIds = ids.replace(`=${item.id},`, '=');
      } else if (ids.includes(`&genres=${item.id}`)) {
        newIds = ids.replace(`&genres=${item.id}`, '');
      } else if (ids.includes(`,${item.id}`)) {
        newIds = ids.replace(`,${item.id}`, '');
      }
      setIds(newIds);
    }
    if (checkbox === true && item.category === 'platform') {
      ids.length === 0 ? setIds(`&platforms=${item.id}`) : setIds(ids + `,${item.id}`);
    } else if (checkbox === false && item.category === 'platform') {
      let newIds = ids;
      if (ids.includes(`=${item.id},`)) {
        newIds = ids.replace(`=${item.id},`, '=');
      } else if (ids.includes(`&platforms=${item.id}`)) {
        newIds = ids.replace(`&platforms=${item.id}`, '');
      } else if (ids.includes(`,${item.id}`)) {
        newIds = ids.replace(`,${item.id}`, '');
      }
      setIds(newIds);
    }
    setChanges(true);
  };

  return (
    <section >
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type='checkbox'
                checked={checkboxes[item.title] || false}
                onChange={() => handleCheckboxChange(item)}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}







function Filtro({fetchData, showFilters}) {
  const categories = [
    { title: 'Indie', id: 51, category: 'genres' },
    { title: 'Adventure', id: 3, category: 'genres' },
    { title: 'RPG', id: 5, category: 'genres' },
    { title: 'Shooter', id: 2, category: 'genres' },
    { title: 'Strategy', id: 10, category: 'genres' },
    { title: 'Simulation', id: 14, category: 'genres' },
    { title: 'Sports', id: 15, category: 'genres' },
    { title: 'Action', id: 4, category: 'genres' },
    { title: 'Fighting', id: 6, category: 'genres' },
    { title: 'Casual', id: 40, category: 'genres' }
  ];

  const platforms = [
    { title: 'PC', id: 4, category: 'platform' },
    { title: 'Xbox Series', id: 186, category: 'platform' },
    { title: 'Xbox one', id: 1, category: 'platform' },
    { title: 'Xbox 360', id: 14, category: 'platform' },
    { title: 'Playstation 5', id: 187, category: 'platform' },
    { title: 'Playstation 4', id: 18, category: 'platform' },
    { title: 'Playstation 3', id: 16, category: 'platform' },
    { title: 'Playstation 2', id: 27, category: 'platform' },
    { title: 'Nintendo Switch', id: 7, category: 'platform' },
    { title: 'Wii', id: 11, category: 'platform' },
    { title: 'Android', id: 21, category: 'platform' }
  ];


  return (
    <div className={`filter filter-mobile ${showFilters ? 'open' : ''}`}>
      <CheckboxList className='genres' title="Genres" items={categories} fetchData={fetchData} />
      <CheckboxList className='platfomrs' title="Platforms" items={platforms} fetchData={fetchData}  />
    </div>
  );
}

export default Filtro;
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Developers.css'
const Developers = ({ developers }) => {
  return (
  <>

  <div className='dev'>
      {developers.map((developer) => (
        <div className='developers' key={developer.id}>
          <h3>{developer.name}</h3>
             <img src={developer.image_background} alt="" />
        </div>
      ))}
      </div>
   </>
  );
};

export default Developers;

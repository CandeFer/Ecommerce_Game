/* eslint-disable react/prop-types */
import './Tags.css'

function Tags({ tags }) {
    console.log(tags)
    return (
        <div className='tags'>
            {tags.map((tag) => (
                <div className='cardT' key={tag.id}>
                    <img src={tag.image_background} alt="" />
                    <div className='card-dataT'>
                        <h3>{tag.name}</h3>
                        <p>Language: {tag.language}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}


export default Tags

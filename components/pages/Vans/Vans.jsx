import React from "react"
import { Link } from "react-router-dom"

const Vans = (props) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    console.log('props', props)
    return (
        <>
            <div className="vans-main-container">

                 <Link 
                 className="link-no-decoration grow" 
                 to={`/vans/${props.id}`}
                 aria-label={`View details for ${props.name}, priced at $${props.price} per day`}
                 >
                    <img 
                    className="vans-image"
                    src={props.imageUrl}
                    alt={`Image of ${props.name}`}
                    width="200px"
                    height="auto"
                    />
                        
                        <div className="vans-price-container">
                            <span className="vans-model-name-span">{props.name}</span>
                            <div className="vans-price-per-day-container">
                                <span className="vans-price-span">${props.price}</span>
                                <p className="vans-day-span">/day</p>
                            </div>
                        </div>
                        <button className={`vans-button ${props.type}`}>{capitalizeFirstLetter(props.type)}</button>
                </Link>
            </div>

            
        </>
    )
}

export default Vans
import React from "react"

const Vans = (props) => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    console.log('props', props)
    return (
        <>
            <div className="vans-main-container">

             
                <img 
                className="vans-image"
                src={props.imageUrl}
                alt=""
                width="200px"
                height="auto"
                />
                    
                    <div className="vans-price-container">
                        <span className="vans-model-name-span">{props.name}</span>
                        <div className="vans-price-per-day-container">
                            <span className="vans-price-span">{props.price}</span>
                            <p className="vans-day-span">/day</p>
                        </div>
                    </div>
                    <button className="vans-button">{capitalizeFirstLetter(props.type)}</button>
                </div>

            
        </>
    )
}

export default Vans
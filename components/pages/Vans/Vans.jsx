import React from "react"
import { NavLink, useSearchParams } from "react-router-dom"

const Vans = () => {

    const [vanData, setVanData] = React.useState([])

    React.useEffect(function() {
      console.log("Effect ran")
      fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data.vans))
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("type")
    
    const filteredVans = typeFilter
            ? vanData.filter(van => van.type === typeFilter)
            : vanData

  const VAN_MAX = 12;

  const vanElements = filteredVans.slice(0, VAN_MAX).map(van => {    
   
    return (

      <div className="vans-main-container" key={van.id}>

      <NavLink 
      className="link-no-decoration grow" 
      to={`/vans/${van.id}`}
      aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
         <img 
         className="vans-image"
         src={van.imageUrl}
         alt={`Image of ${van.name}`}
         width="200px"
         height="auto"
         />
             
             <div className="vans-price-container">
                 <span className="vans-model-name-span">{van.name}</span>
                 <div className="vans-price-per-day-container">
                     <span className="vans-price-span">${van.price}</span>
                     <p className="vans-day-span">/day</p>
                 </div>
             </div>
             <button className={`vans-button ${van.type}`}>{capitalizeFirstLetter(van.type)}</button>
     </NavLink>
 </div>

    )
  })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }


        /**
     * Challenge: access the search params in this component
     * 1. Using the hook from react-router-dom, set a variable
     *    called `searchParams`
     * 2. Save the value of the `type` parameter (from the
     *    `searchParams` object) to a variable called `typeFilter`
     * 3. Log the value of the `typeFilter` to the console
     */

    // console.log('props', props)
    return (
        <>
        {vanData ? (
          vanElements
        ) : (
          <h2>Loading...</h2>
        )}
      </>
    )
}

export default Vans
import React from "react"
import { NavLink, useSearchParams, Link } from "react-router-dom"

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vanData, setVanData] = React.useState([])

    const typeFilter = searchParams.get("type")
    console.log(searchParams.toString())
    React.useEffect(function() {
      console.log("Effect ran")
      fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVanData(data.vans))
    }, [])


    

    
    const filteredVans = typeFilter
            ? vanData.filter(van => van.type === typeFilter)
            : vanData

  const VAN_MAX = 12;

  const vanElements = filteredVans.slice(0, VAN_MAX).map(van => {    
   
    return (

      <div className="vans-main-container" key={van.id}>

      <Link 
      className="link-no-decoration grow" 
      to={van.id}
    //   state={{ search: searchParams.toString() }}
    state={{
        search: searchParams.toString()
        }}
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
     </Link>
 </div>
    )
  })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    // function handleFilterChange(key, value) {
    //     setSearchParams(prevParams => {
    //         if (value === null) {
    //             prevParams.delete(key)
    //         } else {
    //             prevParams.set(key, value)
    //         }
    //         return prevParams
    //     })
    // }

    // console.log(searchParams.toString())

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
import React from "react"
import { NavLink, useSearchParams, Link } from "react-router-dom"
import { getVans } from "../../../api.js"

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vanData, setVanData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")
    console.log(searchParams.toString())

    // React.useEffect(function() {
    //   console.log("Effect ran")
    //   fetch("/api/vans")
    //     .then(res => res.json())
    //     .then(data => setVanData(data.vans))
    // }, [])

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
            const data = await getVans()
            setVanData(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])
    
console.log(vanData)
    
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

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    if (error) {
        return <h1 aria-live="assertive">Error... {error.message}</h1>
    }

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
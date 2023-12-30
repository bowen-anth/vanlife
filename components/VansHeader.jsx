import React from "react"
import { useSearchParams } from "react-router-dom"

const VansHeader = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

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
console.log(searchParams)
    return (
        <>
            <div className="vansHeader-container">
                <div className="vansHeader-header-container">
                    <h1 className="vansHeader-h1">Explore our van options</h1>
                    <div className="vansHeader-button-container">
                        <button                                                              
                        className={typeFilter === "simple" ? "vansHeader-button simple selected" : "vansHeader-button simple-hover"}
                        onClick={() => setSearchParams({type: "simple"})}
                        // onClick={() => handleFilterChange("type", "simple")}
                        state={{ search: searchParams.toString()}}
                        >
                            Simple
                        </button>
                        <button 
                        className={typeFilter === "luxury" ? "vansHeader-button luxury selected" : "vansHeader-button luxury-hover"}
                        onClick={() => setSearchParams({type: "luxury"})}
                        >
                            Luxury
                        </button>
                        <button 
                        className={typeFilter === "rugged" ? "vansHeader-button rugged selected" : "vansHeader-button rugged-hover"}
                        onClick={() => setSearchParams({type: "rugged"})}                    
                        >
                            Rugged
                        </button>
                        <span 
                        className="vansHeader-clear-filters-span"
                        onClick={() => setSearchParams({})}
                        >
                            Clear filters
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VansHeader
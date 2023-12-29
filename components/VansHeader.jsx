import React from "react"
import { useSearchParams } from "react-router-dom"

const VansHeader = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)
    return (
        <>
            <div className="vansHeader-container">
                <div className="vansHeader-header-container">
                    <h1 className="vansHeader-h1">Explore our van options</h1>
                    <div className="vansHeader-button-container">
                        <button 
                        className={typeFilter === "simple" ? "vansHeader-button simple selected" : "vansHeader-button"}
                        onClick={() => setSearchParams({type: "simple"})}
                        >
                            Simple
                        </button>
                        <button 
                        className={typeFilter === "luxury" ? "vansHeader-button luxury selected" : "vansHeader-button"}
                        onClick={() => setSearchParams({type: "luxury"})}
                        >
                            Luxury
                        </button>
                        <button 
                        className={typeFilter === "rugged" ? "vansHeader-button rugged selected" : "vansHeader-button"}
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
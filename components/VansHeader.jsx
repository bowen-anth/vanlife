import React from "react"
import { useSearchParams } from "react-router-dom"

const VansHeader = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <>
            <div className="vansHeader-container">
                <div className="vansHeader-header-container">
                    <h1 className="vansHeader-h1">Explore our van options</h1>
                    <div className="vansHeader-button-container">
                        <button 
                        className="vansHeader-button"
                        onClick={() => setSearchParams({type: "simple"})}
                        >
                            Simple
                        </button>
                        <button 
                        className="vansHeader-button luxury"
                        onClick={() => setSearchParams({type: "luxury"})}
                        >
                            Luxury
                        </button>
                        <button 
                        className="vansHeader-button rugged"
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
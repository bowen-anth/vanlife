import React from "react"

const VansHeader = () => {
    return (
        <>
            <div className="vansHeader-container">
                <div className="vansHeader-header-container">
                    <h1 className="vansHeader-h1">Explore our van options</h1>
                    <div className="vansHeader-button-container">
                        <button className="vansHeader-button">Simple</button>
                        <button className="vansHeader-button">Luxury</button>
                        <button className="vansHeader-button">Rugged</button>
                        <span className="vansHeader-clear-filters-span">Clear filters</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VansHeader
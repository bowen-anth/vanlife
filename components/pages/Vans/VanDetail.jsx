import React from "react"
import { useParams, NavLink, useLocation } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    const [van, setVan] = React.useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])


    return (
        <>
                <NavLink
                to={location.state.search ? `../?${location.state.search}` : ".."}
                relative="path"
                className="back-button"
                    >&larr; <span>Back to all vans</span>
                </NavLink>
            <div className="van-detail-container">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} 
                        alt={van.title}
                        width="400px"
                        height="auto"
                        />
                        <div className="van-info-container">
                            <button className={`van-type ${van.type} selected no-cursor`}>{van.type}</button>
                            <h2>{van.name}</h2>
                            <p className="van-price">${van.price}<span className="day-span">/day</span></p>
                            <p className="van-description-p">{van.description}</p>
                            <button className="van-link-button">Rent this van</button>
                        </div>
                    </div>
                ) : <h2>Loading...</h2>}
             </div>
        </>
    )
}

export default VanDetail
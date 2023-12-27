import React from "react"
import { useParams } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])


    return (
        <>
            <div className="van-detail-container">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} 
                        alt={van.title}
                        width="400px"
                        height="auto"
                        />
                        <div className="van-info-container">
                            <button className={`van-type ${van.type} selected`}>{van.type}</button>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
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
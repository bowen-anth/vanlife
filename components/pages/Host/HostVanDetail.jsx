import React from "react"
import { useParams, NavLink } from "react-router-dom"

const HostVanDetail = (props) => {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])
// console.log('currentVan', currentVan)
// console.log('name', currentVan.name)
    // const hostVanDetailCard = currentVan.vans.map((van) => {
    //     return (
    //         <p>{van.title}</p>
    //     )
    // })

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="host-van-detail-container">
                <div className="host-van-container">
                <img src={currentVan.imageUrl} width={150} />
                    <div className="host-van-info-container">
                        <button>{currentVan.type}</button>
                        <p className="host-van-name-p">{currentVan.name}</p>
                        <p className="host-van-price-p">{currentVan.price}<span className="detail-day-span">/day</span></p>
                    </div>
                </div>
                
                <div className="host-van-detail-link-container">
                    <NavLink to="">Details</NavLink>
                    <NavLink to="">Pricing</NavLink>
                    <NavLink to="">Photos</NavLink>
                </div>

            </div>
        </>
    )
}

export default HostVanDetail
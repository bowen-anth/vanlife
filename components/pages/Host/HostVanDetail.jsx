import React from "react"
import { useParams, NavLink } from "react-router-dom"

const HostVanDetail = () => {

        const activeStyle = {
            fontWeight: 900,
            textDecoration: "underline"
          }

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

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
                        <p className="host-van-price-p">${currentVan.price}<span className="detail-day-span">/day</span></p>
                    </div>
                </div>
                <div className="host-van-detail-link-container">
                    <NavLink 
                    className="host-van-navlink" 
                    end
                    to=""
                    style={({isActive}) => isActive ? activeStyle : null} 
                    >
                        Details
                    </NavLink>
                    <NavLink 
                    className="host-van-navlink" 
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink className="host-van-navlink" 
                    to="photos"
                    style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Photos
                    </NavLink>
                </div>
                <p className="host-van-info-p"><span className="host-van-bold-span">Name: </span>{currentVan.name}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Category: </span>{capitalizeFirstLetter(currentVan.type)}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Description: </span>{currentVan.description}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Visibility: </span>Public</p>
            </div>
        </>
    )
}

export default HostVanDetail
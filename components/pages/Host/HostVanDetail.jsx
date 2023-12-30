import React from "react"
import { useParams, NavLink, Outlet } from "react-router-dom"
import { getVan } from "../../../api.js"

const HostVanDetail = () => {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const activeStyle = {
        fontWeight: 900,
        textDecoration: "underline"
      }

      React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    // React.useEffect(() => {
    //     fetch(`/api/host/vans/${id}`)
    //     .then(res => res.json())
    //     .then(data => setCurrentVan(data.vans))
    // }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <NavLink
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></NavLink>
            <div className="host-van-detail-container">
                <div className="host-van-container">
                <img src={currentVan.imageUrl} width={150} />
                    <div className="host-van-info-container">
                        <button className={`host-van-info-container-button ${currentVan.type}`}>{capitalizeFirstLetter(currentVan.type)}</button>
                        <p className="host-van-name-p">{currentVan.name}</p>
                        <p className="host-van-price-p">${currentVan.price}<span className="detail-day-span">/day</span></p>
                    </div>
                </div>
                <div className="host-van-detail-link-container">
                    <NavLink 
                    className="host-van-navlink" 
                    end
                    to="."
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
                    <Outlet context={{currentVan, setCurrentVan}}/>
                </div>
            </div>
        </>
    )
}

export default HostVanDetail
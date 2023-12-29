import React from "react"
import { NavLink, useParams, useOutletContext } from "react-router-dom"

const HostVanInfo = () => {

    const { id } = useParams()
    // const [currentVan, setCurrentVan] = React.useState(null)
    const { currentVan } = useOutletContext()

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
        <section>
                <p className="host-van-info-p"><span className="host-van-bold-span">Name: </span>{currentVan.name}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Category: </span>{capitalizeFirstLetter(currentVan.type)}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Description: </span>{currentVan.description}</p>
                <p className="host-van-info-p"><span className="host-van-bold-span">Visibility: </span>Public</p>
        </section>
    )
}

export default HostVanInfo
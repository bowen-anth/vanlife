import React from "react"
import { NavLink } from "react-router-dom"
import { getVans } from "../../../api.js"

const HostVans = () => {

    const [hostVanData, setHostVanData] = React.useState([])

    // React.useEffect(() => {
    //     fetch("/api/host/vans")
    //     .then(res => res.json())
    //     .then(data => setHostVanData(data.vans))
    // }, 
    // [])

    React.useEffect(() => {
        async function loadVans() {
            const data = await getVans()
            setHostVanData(data)
        }
        loadVans()
    }, [])
 

    const hostVanCard = hostVanData.map(van => {
        return (
            <NavLink to={van.id}>
                <div className="host-vans-van-container" key={van.id}>
                <img src={van.imageUrl}
                    width="400px"
                    height="auto"
                    alt={van.name}
                />
                <div className="host-vans-van-info-container">
                    <p className="host-van-name-p">{van.name}</p>
                    <p className="host-van-price-p">${van.price}/day</p>
                </div>
            </div>
           </NavLink>
        )
    })

    

    return (
        <>
            <h1>Your listed Vans</h1>
            {
                    hostVanData.length > 0 ? (
                        <section>
                            {hostVanCard}
                        </section>
                    ) : (
                            <h2>Loading...</h2>
                        )
                }
        </>
    )
}

export default HostVans
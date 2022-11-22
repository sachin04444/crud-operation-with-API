import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Detailt = () => {
    const { Empid } = useParams()
    const [empdata, setEmpdata] = useState([])
    const url = "http://localhost:3006/contact/"

    // console.log(Empid)

    const totalDet = async (URL) => {
        const res = await axios.get(URL + Empid)
        const Dat = await res.data
        // console.log(Dat)
        setEmpdata(Dat)
    }

    useEffect(() => {
        totalDet(url)
    }, [])

    return (

        <>
            <div className='Detailmain'>
                <h1 className="Headeer" >Customer  <span className='headerH'>Detail</span></h1>
                <div className='MainDetail'>
                    <h2> {empdata.id}</h2>
                    <h1>{empdata.Name}</h1>
                    <h1 className='bottommar'>{empdata.email}</h1>
                    <Link to="/" className='btnL'>back</Link>
                </div>
            </div>
        </>
    )
}

export default Detailt

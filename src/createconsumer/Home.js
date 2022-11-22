import axios from 'axios'
import React, { useEffect, useState} from 'react'
import {
    
    Link, Navigate
} from 'react-router-dom';
// import './H.css';

const Home = () => {
    const url = "http://localhost:3006/contact"
    const [first, SetFst] = useState([])

    const totaldata = async (URL) => {
        const res = await axios.get(URL)
        const Data = await res.data
        SetFst(Data)
    }

    useEffect(() => {
        totaldata(url)
    }, [])

    // const LoadDetail=(id)=>{
    //    Navigate("/Home/detail/"+id)
    // }

    const removefuction=(id)=>{
              if (window.confirm("Do you went to delte")) {
                axios.delete("http://localhost:3006/contact/"+id).then((res)=>{
                    alert("remove succesfulle")
                    window.location.reload()
                })
              }
    }

    return (
        <>
        <div className='Home'> 
            <h1 className='Headeer'>Customer <span className='headerH'>List</span></h1>
            <Link to="Home/Create"  className='btnL btnADD' >+</Link>
            <div className='all'  >
                {
                    
                    first.map(pro => {
                        return (
                            <div key={pro.id}  className='allData'>
                                <h2>{pro.id}</h2>
                                <h1>{pro.Name}</h1>
                                <h1>{pro.email}</h1>
                                <div className='allBTn'>
                                  <Link className='btnL' to={`/Home/detail/${pro.id}`}>detail</Link>
                                  <Link className='btnL' to={`/Home/Edit/${pro.id}`}>edit</Link>
                                  <button  className='btn'  onClick={()=>removefuction(pro.id)}> delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}

export default Home

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'



const EditF = () => {

    const navigator = useNavigate()
    const { Empid } = useParams()
    const [Name, setName] = useState()
    const [email, setEmail] = useState()
    const deta = { Name, email }
    const url = "http://localhost:3006/contact/"
    const totalEdit = async (URL) => {
        const res = await axios.get((URL + Empid))
        const Dat = await res.data
        setName(Dat.Name)
        setEmail(Dat.email)
        // setEmpdata(Dat)
    }


    // const url = "http://localhost:3006/contact"
    //   const deta ={name,email}
    const Handlesubmit = (e) => {
        e.preventDefault();
        console.log(deta)
        axios.put(url + Empid, deta)
            .then((res) => navigator("/"))
            .catch((erre) => console.log(erre))

    }
    useEffect(() => {
        totalEdit(url)
    }, [])

    return (
        <div>
            <div >

                <div className='CreateM'>
                    < h1 className='Headeer'>Plseae <span className='headerH'>Edit</span> </h1>
                    <div className='Mform'>
                        <form onSubmit={Handlesubmit}>
                            <h1>wallcome</h1>
                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Name' name='fullname' /><br />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Email' name='email' /><br />

                            <button type="submit" className='btn'  >Submit</button>
                            <Link to="/" className='btnL'>back</Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditF

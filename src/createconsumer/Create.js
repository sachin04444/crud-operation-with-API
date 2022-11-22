import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./adds.css"

const Create = () => {
  const [Name, setName] = useState()
  const [email, setEmail] = useState()
  const navigator = useNavigate()

  const url = "http://localhost:3006/contact"
  const deta = { Name, email }
  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log(deta)
    axios.post(url, deta)
      .then((res) => navigator("/"))
      .catch((erre) => console.log(erre))

  }

  return (
    <div className='CreateM'>
      <h1  className='Headeer'>Let Create New <span className='headerH'>New</span> </h1>
      <div className='Mform'>
        <form onSubmit={Handlesubmit}>
          <h1>wallcome</h1>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='Enter the Name' name='fullname' /><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Email' name='email' /><br />

          <button type="submit" className='btn' > submit</button>
          <Link to="/" className='btnL'  >Back</Link>
        </form>
      </div>

    </div>
  )
}

export default Create

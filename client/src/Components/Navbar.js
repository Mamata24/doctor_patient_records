import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div style={{marginLeft:"430px",marginBottom:"30px"}} className="navbar navbar-expand-lg navbar-primary">
            <Link style={{fontSize:"50px"}} className="navbar-brand" to="/">PATIENT RECORDS</Link>
        </div>
    )
}

export default Navbar

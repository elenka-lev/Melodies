import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
        <img  width='136px' height='50px'
            src="/images/logo.png" alt='Logo' />
        
    </Link>
  )
}

export default Logo
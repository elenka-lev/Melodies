import React from 'react'

const Button = ({ children, onClick, variant = "primary", className }) => {
  return (
    <button className={`btn ${variant} ${className || ""}`} 
      onClick={onClick}>
      { children}
    </button>
  )
}

export default Button
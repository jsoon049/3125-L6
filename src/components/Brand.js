import React from 'react'
import "./Brand.css"
import logo from '../images/logo.jpeg'

export const Brand = () => {
    return (
        <div className="brand">
            <div className="brand-logo-container">
                <img src={logo} alt='site logo' className="logo"></img>
                <h1 className="brandTitle">Matrix Chiropractor</h1>
            </div>
            <div className="brand-info-container">
                <h3 className="brand-info">460 West Hunt Club Road Ottawa, Ontario</h3>
                <h3 className="brand-info">(613)-123-4567</h3>
            </div>
        </div>
    )
}

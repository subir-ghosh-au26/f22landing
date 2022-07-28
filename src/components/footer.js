import React from 'react'
import logo1 from '../asset/logo1.png'

export default function footer() {
  return (
    <div className="footer text-center">
        <h2>Get the app now</h2>
        <p>Create custom landing pages with Omega that convert more visitors than any website.</p>
        <div className="clogo">
        <img src={logo1} className="logo1" alt="" />
        </div>
    </div>
  )
}

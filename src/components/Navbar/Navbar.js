import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [stikyNav, setStikyNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setStikyNav(true)
      } else {
        setStikyNav(false)
      }
    })
  }, [])

  return (
    <nav className={`navbar ${stikyNav && 'nav-black'}`}>
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x157.png" alt="brand-logo"/>
      <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="brand-logo"/>
    </nav>
  )
}

export default Navbar

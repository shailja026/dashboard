import React from 'react'
import styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.NavContainer}>
     <nav className={styles.navbar}>
      <span>APP LOGO</span>
      <div className={styles.pages}>
      <Link to="/">DASHBOARD</Link>
      <Link to="/adds" >CREATE ADS</Link>
      </div>

     </nav>
    </div>
  )
}

export default Navbar
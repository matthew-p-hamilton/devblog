import React from 'react'
import { Link } from "gatsby"

import styles from './Header.module.css'

const Header = () => (
    <div className={styles.header}>
      <Link className={styles.headerLink} to="/">
        Matt Hamilton's website.
      </Link>
      <hr />
    </div>
  )

export default Header
import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer';

import styles from './layout.module.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={styles.mainHeading}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerLinkHome} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

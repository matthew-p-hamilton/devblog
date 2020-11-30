import React from "react"
import Footer from '../components/footer'
import Header from '../components/header'

import styles from './layout.module.css'

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
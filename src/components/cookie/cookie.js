import React from 'react'
import CookieConsent from 'react-cookie-consent';

import styles from './cookie.module.css'

// This component is used to provide the user with the ability to accept or decline google analytics tracking. 
// It's imported into the layout so that the user is prompted no mater which page they land on.
// To-Do: 
// - Pull out styles into cookie.module.css. 
// - Technically not actually working. The decline button only sets the gatsby-plugin-google-gtag to false, but does not prevent GA tracking.
//   Will need to refactor to prevent GA cookies from loading before acceptance. TBD on how to implement.

const Cookie = () => (
    <div className={styles.cookie}>
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          style={{ background: "#333333", color: "#ffffff" }}
          buttonStyle={{ color: "#333333", background: "#f991cc", fontSize: "18px" }}
          enableDeclineButton
          declineButtonText="Decline"
          declineButtonStyle={{ color: "#333333", background: "#75f4f4", fontSize: "18px" }}
          flipButtons="True"
          cookieName="gatsby-plugin-google-gtag">
          Google Analytics is used to understand how users interact with the site. 
          Accept if you're OK with your information being shared. Decline if you're not.
      </CookieConsent>
    </div>
  )

export default Cookie

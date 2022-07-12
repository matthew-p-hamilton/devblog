import React from 'react';

import styles from './footer.module.css';
import { LinkedinLogo, TwitterLogo, MediumLogo, EnvelopeSimple } from "phosphor-react";


const Footer = () => (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
            <a
                href='mailto:matthew.p.hamilton@protonmail.com'
                target='_blank'
                rel='noopener noreferrer'
            >
                <EnvelopeSimple weight="fill" size={32} />
            </a>  
            <a
                href='https://www.linkedin.com/in/matthew-p-hamilton/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <LinkedinLogo weight="fill" size={32} />
            </a>
            <a
                href='https://twitter.com/ham__lol'
                target='_blank'
                rel='noopener noreferrer'
            >
                <TwitterLogo weight="fill" size={32} />
            </a>
            <a
                href='https://twitter.com/mattphamilton'
                target='_blank'
                rel='noopener noreferrer'
            >
                <MediumLogo weight="fill" size={32} />
            </a>
        </div>
        © {new Date().getFullYear()}
    </div>
  )

  export default Footer;
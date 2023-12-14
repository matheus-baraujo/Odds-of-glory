import React from 'react'
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDeezer, faSpotify } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.menu}>
        <div className={styles.wrapper}>
            <ul className={styles.appNav}>
                <li><Link href={''}>Home</Link></li>
                <li><Link href={''}>About</Link></li>
                <li><Link href={''}>Playlists</Link></li>
                <li><Link href={''}>Blog</Link></li>
            </ul>

            <ul className={styles.socialNav}>
                <li><Link href={''}> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faDeezer}></FontAwesomeIcon> </Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header
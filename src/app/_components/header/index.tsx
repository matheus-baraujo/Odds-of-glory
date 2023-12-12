'use client'

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDeezer, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

const StyledMenu = styled.div`
    position: fixed;
    z-index: 55;
    top: 0%;
    left: 0%;
    width: 100%;
    padding: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
    }

    a {
        color: white;
        font-size: 1.5rem;
        transition: ease-in-out 0.3s;

        &:hover {
            color: white;
            opacity: 1;
            transform: translate(-3px, -3px);
            text-shadow: 3px 3px 3px #ff71a2;
        }

        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .navbar-toggler {
        background-color: white;
        opacity: 0.6;
    }

    #inner-page-nav {
        gap: 16px;
    }

    #social-nav {
        a {
            color: #ff71a2;

            &:hover{
                color: white;
            }
        }
    }
`;

const Header = () => {
  return (
    <StyledMenu>
        <ul>
            <li><Link href={''}>Home</Link></li>
            <li><Link href={''}>About</Link></li>
            <li><Link href={''}>Playlists</Link></li>
            <li><Link href={''}>Blog</Link></li>
        </ul>

        <ul>
            <li><Link href={''}> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </Link></li>
            <li><Link href={''}></Link></li>
            <li><Link href={''}></Link></li>
            <li><Link href={''}></Link></li>
        </ul>
    </StyledMenu>
  )
}

export default Header
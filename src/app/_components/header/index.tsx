'use client'

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faDeezer, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link';

const StyledMenu = styled.div`
    position: fixed;
    z-index: 55;
    top: 0%;
    left: 0%;
    width: 100%;
    padding: 30px 0px;
    background-color: black;
    
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;

        .brand{
            color: #ff71a2;

            &:hover{
                color: white;
            }
        }


    }

    a {
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
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

    .socialNav {
        
        a {
            color: #ff71a2;
            padding: 0px 5px;

            &:hover{
                color: white;
            }
        }
        
    }
`;

const StyledWrapper = styled.div`
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;


const Header = () => {
  return (
    <StyledMenu>
        <StyledWrapper>
            <ul className='appNav'>
                <li><Link href={''}> <FontAwesomeIcon icon={faRecordVinyl} className='brand' beat/> </Link></li>
                <li><Link href={''}>Home</Link></li>
                <li><Link href={''}>About</Link></li>
                <li><Link href={''}>Playlists</Link></li>
                <li><Link href={''}>Blog</Link></li>
            </ul>

            <ul className='socialNav'>
                <li><Link href={''}> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> </Link></li>
                <li><Link href={''}> <FontAwesomeIcon icon={faDeezer}></FontAwesomeIcon> </Link></li>
            </ul>
        </StyledWrapper>
        
    </StyledMenu>
  )
}

export default Header
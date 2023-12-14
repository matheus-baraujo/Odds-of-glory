'use client'

import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;


const StyledAnimation = styled.div`
    position: relative;
    display: flex;
`;

const StyledBubbles = styled.span`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 4px;
    background-color: teal;
    box-shadow: 0 0 0 10px teal, 0 0 50px teal, 0 0 100px teal;
    animation: animate 15s linear infinite;
    animation-duration: calc(120s / var(--i));

    &:nth-child(even){
        background-color: magenta;
        box-shadow: 0 0 0 10px magenta, 0 0 50px magenta, 0 0 100px magenta;
    }

    @keyframes animate{
        0%{
            transform: translateY(100vh) scale(0);
        }
        100%{
            transform: translateY(-10vh) scale(1);
        }
    }

`;


const AnimatedBackground = () => {
  return (
    <StyledContainer>
        <StyledAnimation>
            <StyledBubbles style={{"--i":11}}></StyledBubbles>
            <StyledBubbles ></StyledBubbles>
            <StyledBubbles ></StyledBubbles>
            <StyledBubbles ></StyledBubbles>
            <StyledBubbles ></StyledBubbles>
        </StyledAnimation>
    </StyledContainer>
  )
}

export default AnimatedBackground
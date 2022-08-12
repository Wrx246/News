import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-500px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const NewsListWrap = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    animation: ${rotateAnimation} 1s linear;
`;

export const CountryWrap = styled.div`
    height: 30px;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;


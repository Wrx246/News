import styled, { keyframes } from "styled-components";

export const PanelWrap = styled.div`
    height: 42px;
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(246, 80, 80, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const moveAnimation = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const PanelInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    max-width: 500px;
    overflow: hidden;
    p {
        font-size: 15px;
        line-height: 12px;
        color: #393939;
        font-family: ${props => props.theme.font.secondary};
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }
`;

export const MoveInfo = styled.div`
    width: 600px;
    animation: ${moveAnimation} 15s linear infinite; 
`;

export const PanelLinks = styled.div`
        
    img {
        width: 24px;
        height: 24px;
        margin: 0px 5px;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`;
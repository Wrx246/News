import styled from "styled-components";

export const PanelWrap = styled.div`
    height: 42px;
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(246, 80, 80, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const PanelInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
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

export const PanelLinks = styled.div`
        
    img {
        width: 24px;
        height: 24px;
        margin: 0px 5px;
    }
`;
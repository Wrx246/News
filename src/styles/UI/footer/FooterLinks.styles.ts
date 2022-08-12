import styled from "styled-components";

export const LinksWrap = styled.div`
    width: 250px;

    p {
        font-family: ${props => props.theme.font.secondary};
        margin-top: 30px;
        font-size: 14px;
        line-height: 148.1%;
        color: #FFFFFF;
    }
    div {
        margin-top: 35px;
        display: flex;
        gap: 25px;
    }
`;
import styled from "styled-components";

export const HealthWrap = styled.article`
    width: 365px;
    height: 70px;
    display: flex;
    gap: 20px;

    img {
        width: 90px;
        height: 70px;
    }
`;

export const HealthWrapBody = styled.div`
    width: 256px;
    height: auto;

    span {
        font-family: ${props => props.theme.font.secondary};
        font-weight: 400;
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #484848;
        }
    }

    h2 {
        margin-top: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        text-transform: capitalize;
        color: #393939;
    }
`;
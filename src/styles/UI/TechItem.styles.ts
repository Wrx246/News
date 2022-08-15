import styled from "styled-components";

export const ItemWrapper = styled.article`
    width: 333px;
    height: 100px;
    display: flex;
    gap: 17px;
    img {
        height: 100px;
        width: 130px;
    }
    &:hover {
        cursor: pointer;
        text-decoration: underline;

        img {
            opacity:0.8;
        }
    }
`;

export const ItemTitle = styled.div`

    p {
        font-family: ${props => props.theme.font.secondary};
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
        margin-bottom: 12px;
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            color: #484848;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #393939;
    }
`;
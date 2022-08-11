import styled from "styled-components";

export const ListItemWrap = styled.article`
    height: 200px;
    display: flex;
    gap: 50px;
    background: #f5efef;
    img {
        width: 250px;
        height: 100%;
    }
`;

export const ListItemBody = styled.div`
    margin-top: 6px;
    span {
        font-size: 12px;
        line-height: 100.9%;
        color: #393939;
    }
    h3 {
        width: 70%;
        margin-top: 10px;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        text-transform: capitalize;
        color: #393939;
    }
    p {
        width: 70%;
        margin-top: 6px;
        font-weight: 250;
        font-size: 14px;
        line-height: 111.1%;
        color: rgba(57, 57, 57, 0.6);
    }
`;
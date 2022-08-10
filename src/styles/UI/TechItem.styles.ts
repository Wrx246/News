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
`;

export const ItemTitle = styled.div`

    p {
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
        margin-bottom: 12px;
    }
    h3 {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #393939;
    }
`;
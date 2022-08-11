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
        font-weight: 400;
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
    }

    h2 {
        margin-top: 6px;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        text-transform: capitalize;
        color: #393939;
    }
`;
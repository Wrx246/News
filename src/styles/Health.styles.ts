import styled from "styled-components";

export const HealthWrapper = styled.section`
    margin-top: 50px;

    h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #F65050;
    }
`;

export const HealthBody = styled.div`
    margin-top: 25px;
    height: 400px;
    display: flex;
    flex-direction: row;
    gap: 30px;
`;

export const HealthMainNews = styled.article`
    width: 394px;
    height: auto;

    img {
        width: 394px;
        height: 250px;
    }

    span {
        margin-top: 25px;
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
    }

    h2 {
        margin-top: 6px;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #393939;
    }

    p {
        margin-top: 6px;
        font-weight: 250;
        font-size: 14px;
        line-height: 111.1%;
        color: rgba(57, 57, 57, 0.6);
    }
`;

export const HealthColumn = styled.div`
    width: 380px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const HealthBanner = styled.article`
    position: relative;
    right: 0;
    width: 271px;
    height: auto;
    background-color: green;
`;
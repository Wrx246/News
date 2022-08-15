import styled from "styled-components";

export const LifeWrapper = styled.section`
    margin-top: 50px;

    h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #F65050;
    }
`;

export const LifeBody = styled.div`
    margin-top: 25px;
    width: 1170px;
    height: 657px;
    display: flex;
    flex-direction: row;
    gap: 30px;

    div {
        width: 520px;
    }
`;

export const LifeSectionFirst = styled.article`
    height: 425px;

    img {
        width: 520px;
        height: 250px;
    }
    span {
        font-family: ${props => props.theme.font.secondary};
        margin-top: 25px;
        font-size: 12px;
        line-height: 100.9%;
        color: #393939;
    }
    h2 {
        margin-top: 6px;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #393939;
    }
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #484848;
        }
    }
    p {
        font-family: ${props => props.theme.font.secondary};
        margin-top: 12px;
        font-weight: 250;
        font-size: 14px;
        line-height: 111.1%;
        color: rgba(57, 57, 57, 0.6);
    }
    &:hover {
        img {
            opacity: 0.8;
        }
        h2 {
            text-decoration: underline;
        }
    }
`;

export const LifeItem = styled.article`
    width: 360px;
    height: 92px;
    display: flex;
    margin-top: 25px;
    gap: 23px;
    img {
        height: 90px;
        width: 120px;
    }
    &:hover {
        img {
            opacity: 0.8;
        }
        h3 {
            text-decoration: underline;
        }
    }
`;

export const LifeItemTitle = styled.div`

    span {
        font-family: ${props => props.theme.font.secondary};
        font-size: 10px;
        line-height: 100.9%;
        color: #393939;
        margin-bottom: 6px;
    }
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #484848;
        }
    }
    h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #393939;
    }
`;
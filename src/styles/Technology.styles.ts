import styled from "styled-components";

export const TechWrapper = styled.section`
    margin-top: 50px;

    h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #F65050;
    }
`;

export const TechBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 25px;
`;

interface IMainNews {
    image: string
}

export const TechMainNews = styled.article<IMainNews>`
    height: 450px;
    width: 1170px;
    background: url(${props => props.image});
`;

export const TechTitle = styled.div`
    position: relative;
    left: 30px;
    top: 230px;

    h3 {
        width: 603px;
        height: 36px;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        margin-bottom: 29px;
    }

    p {
        font-family: ${props => props.theme.font.secondary};
        font-size: 18px;
        line-height: 125.6%;
        color: #FFFFFF;
        width: 526px;
        height: 46px;
    }

    hr {
        width: 200px;
        border: 1px solid red;
        margin-bottom: 8px;
    }
`;

export const LinkCategory = styled.div`
    position: relative;
    top: 25px;
    left: 25px;
    width: 54px;
    height: 22px;
    background: #0088FF;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TechItemWrap = styled.div`
    display: flex;
    gap: 68px;
`;
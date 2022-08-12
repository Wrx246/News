import styled from "styled-components";

export const GeneralWrapper = styled.section`
    height: 570px;
    display: grid;
    grid-template-areas:
        "first first second third"
        "first first second third"
        "first first fourth fourth";
    grid-gap: 15px;
`;

interface IGeneralBox {
    image: string
}

export const GeneralBoxFirst = styled.div<IGeneralBox>`
    grid-area: first;
    max-width: 670px;
    max-height: 570px;
    background-size: 100%;
    background: url(${props => props.image});
    background-color: green;
    font-weight: 500;
    font-size: 36px;
    line-height: 53px;
    text-transform: capitalize;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const GeneralBoxSecond = styled.div<IGeneralBox>`
    grid-area: second;
    max-width: 670px;
    max-height: 570px;
    background-size: 100%;
    background-color: green;
    background: url(${props => props.image});
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const GeneralBoxThird = styled.div<IGeneralBox>`
    grid-area: third;
    max-width: 670px;
    max-height: 570px;
    background-size: 100%;
    background-color: green;
    background: url(${props => props.image});
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const GeneralBoxFourth = styled.div<IGeneralBox>`
    grid-area: fourth;
    max-width: 670px;
    max-height: 570px;
    background-size: 100%;
    background-color: green;
    background: url(${props => props.image});
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

interface ILinkTitle {
    height: string
    width: string
    size: string
}

export const LinkTitle = styled.div<ILinkTitle>`
    position: relative;
    bottom: 25px;
    left: 25px;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: #484848;
        }
    }
    p {
        font-family: ${props => props.theme.font.secondary};
        font-size: ${props => props.size};
        line-height: 100.9%;
        color: #FFFFFF;
    }
    h3 {
        height: ${props => props.height};
        width: ${props => props.width};
    }
`;
import styled from "styled-components";

export const SubWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
    }
    p {
        font-family: ${props => props.theme.font.secondary};
        margin-top: 20px;
        font-size: 14px;
        line-height: 149.1%;
        color: #FFFFFF;
    }
    input {
        margin-top: 20px;
        width: 270px;
        height: 40px;
        border: none;
        font-size: 12px;
        line-height: 163.9%;
        color: #C4C4C4;
        text-align: center;
    }
    button {
        margin-top: 10px;
        width: 270px;
        height: 40px;
        background: #F65050;
        font-weight: 700;
        font-size: 18px;
        line-height: 163.9%;
        color: #FFFFFF;
        border: none;
        &:hover {
            cursor: pointer;
            background: #d77979;
        }
        &:active {
            background: #9b1f1f;
        }
    }
`;
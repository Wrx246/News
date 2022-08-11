import styled from "styled-components";

export const FooterTagsWrap = styled.div`
    width: 250px;

    h3 {
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
    }
    div {
        position: relative;
        top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
`;

export const TagCategory = styled.div`
    padding: 5px;
    width: auto;
    height: auto;
    background: #0088FF;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;
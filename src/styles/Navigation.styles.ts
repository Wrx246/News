import styled from "styled-components";

export const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    background: #393939;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`;

export const NavigationItem = styled.div`
    padding: 15px 12.5px;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    &:hover {
        cursor: pointer;
        transition: .2s;
        color: #F65050;
    }
    &:active {
        transition: .2s;
        background: #F65050;
        color: #FFFFFF;
    }
`;
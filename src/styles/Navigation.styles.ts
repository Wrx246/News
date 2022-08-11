import styled from "styled-components";

export const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    background: #393939;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
`;

interface INav {
    color: string
    background: string
}

export const NavigationItem = styled.div<INav>`
    padding: 15px 12.5px;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    background: ${props => props.background || '#393939'};
    &:hover {
        cursor: pointer;
        transition: .2s;
        color: ${props => props.background || '#F65050'};
    }
    &:active {
        transition: .2s;
        background: #F65050;
        color: #FFFFFF;
    }
`;

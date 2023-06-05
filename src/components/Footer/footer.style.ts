import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top: 0.05rem solid #1a1a1a;
`

export const FooterText = styled.p`
    font-size: 15px;
    color: #666666;
    font-weight: 400;
    letter-spacing: 0.1rem;
`

export const Ancor = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #666666;
    &:visited{
        color: #666666;
    }
`
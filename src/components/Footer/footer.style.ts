import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top: 0.05rem solid #1a1a1a;

    @media (max-width: 700px){
        justify-content: center;
        text-align: center;
        height: 80px;
    }
`

export const FooterText = styled.p`
    font-size: 15px;
    color: #666666;
    font-weight: 400;
    letter-spacing: 0.1rem;

    @media (max-width: 700px){
        font-size: 14px;
        padding: 0 10px;
    }
`

export const Ancor = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #666666;
    &:visited{
        color: #666666;
    }
`
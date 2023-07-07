import styled from "styled-components";


export const Container = styled.header`
    width: auto;
    max-width: 1200px;
    padding: 30px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media(max-width: 1010px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;

        ul{
            padding: 0;
            gap: 18px;
        }

        ul li {
            border-radius: 5px;
            padding: 8px 16px;
            background-color: #f2f2f2;
            font-size: 19px;
        }
    }
`

export const Name = styled.p`
    margin: 0;
    font-size: 40px;
    font-family: 'Wix Madefor Display', sans-serif;

    @media(max-width: 1010px){
        margin: 0;
        font-size: 50px;
    }

     @media(max-width: 468px){
        font-size: 38px;
    }
`


export const HeaderItemsContainer = styled.ul`
    padding: 0;
    display: flex;
    gap: 25px;
    text-decoration: none;
    list-style: none;
    margin: 0;
    align-items: center;
    
    @media(max-width: 468px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const HeaderItems = styled.li`
    color: #0d0d0d;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
`

export const HeaderItemCenter = styled(HeaderItems)`
    align-self: center;
`

export const Ancora = styled.a`
    text-decoration: none;
    transition: 0.3s;
    position: relative;
    letter-spacing: 0.07rem;
    color: black;
    &:after{
        position: absolute;
        content: ' ';
        display: block;
        height: 1.5px;
        width: 0%;
        background-color: #EDB106;
        transition: 0.3s ease-in-out;
    }

    &:hover::after{
        width: 80%;
    }

    &:hover{
        color: #EDB106;
    }
`
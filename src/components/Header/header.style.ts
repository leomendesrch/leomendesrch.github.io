import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    height: 100px;
    color: black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
`

export const Name = styled.p`
    padding-top: 10px;
    font-size: 35px;
    font-family: 'Wix Madefor Display', sans-serif;
`


export const HeaderItemsContainer = styled.ul`
    display: flex;
    gap: 25px;
    text-decoration: none;
    list-style: none;
    height: 35px;
    margin: 0;
    align-items: center;
    padding-top: 10px;
    
`

export const HeaderItems = styled.li`
    margin-top: 5px;
    margin-right: 20px;
    color: #0d0d0d;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
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
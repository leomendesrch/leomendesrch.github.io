import styled from "styled-components";

export const Container = styled.section`
    height: 350px;
    width: auto;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    @media (max-width: 1010px) {
    gap: 50px;
    }

    @media (max-width: 700px){
        flex-direction: column;
        align-items: flex-start;
        padding-left: 35px;
    }
`

export const TextContainer = styled.div`
    height: auto;
    display: block;
`

export const TextImage = styled.img`
    height: 30px;
    width: 75px;
    object-fit: contain;
`

export const ContactsText = styled.p`
    font-size: 20px;
    color: white;
    letter-spacing: 0.1rem;
    margin: 0;

    @media (max-width: 700px){
    font-size: 17px
    }
`

export const ContactsContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const ContactsElement = styled.div`
    display: flex;
    align-items: center;
`
export const ContactsIcon = styled.img`
    display: flex;
    height: 20px;
    margin-right: 10px;
`

export const ContactsName = styled.div`
    letter-spacing: 0.14rem;
    font-size: 16px;
    color: white;
    cursor: pointer;

    @media (max-width: 700px){
    font-size: 14px
    }
`

export const Ancor = styled.a`
    text-decoration: none;
    color: white;
    &:visited{
        color: white;
    }
`
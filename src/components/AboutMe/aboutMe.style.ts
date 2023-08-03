import styled from "styled-components";

interface IProps{
    backgroundColorBottom: string
    backgroundColorTop: string
}

export const Container = styled.div`
    height: calc(auto - 100px);
    width: auto;
    margin: 0 auto;
    max-width: 1200px;
    padding: 40px 20px;
    background-color: white;
    display: flex;
    color: black;
    justify-content: center;
`

export const MyProfile = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    column-gap: 40px;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    @media (max-width: 1010px){
        gap: 30px; 
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

export const MyImage = styled.img`
    max-width: 350px;
    min-width: 270px;
    width: 100%;
    display: flex;
`

export const MyProfileInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    position: relative;

    &::after{
    position: absolute;
    content: "";
    height: 50px;
    width: 50px;
    background: url('https://i.postimg.cc/RF9bsv8r/icone.png');
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -35px;
    margin-right: -10px;
    right: 0;
    bottom: 0;
    }

    
    @media (max-width: 1010px){

        &::after{
            display: none;
        }
    }
`

export const MyProfileTitle = styled.p`
    margin: 0;
    font-size: 35px;
    font-family: 'Wix Madefor Display', sans-serif;

    &::after{
        content: "";
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        background-color: #EDB106;
    }

    @media(max-width: 400px){
        font-size: 30px;
    }
`

export const MyProfileText = styled.p`
    width: 100%;
    height: auto;
    display: flex;
    font-size: 20px;
    font-weight: 400;
    color: #404040;
    letter-spacing: 0.07rem;
    flex-direction: column;
    @media (max-width: 1010px) {

    }
`

export const MyProfileContactsContainer = styled.div`
    display: flex;
    grid-column: 2;
    width: 100%;
    height: auto;
    gap: 30px;

    @media (max-width: 1010px){
        flex-direction: column;
        align-items: center;
    }
`

export const MyProfileContacts = styled.a<IProps>`
    display: flex;
    cursor: pointer;
    border: 1px solid #EDB106;
    padding: 5px 20px;
    background-color: transparent;
    border-radius: 7px;
    font-size: 28px;
    transition: 0.3s;   
    text-decoration: none;
    color: black;
    height: 35px;
    letter-spacing: 0.1rem;
    align-items: center;
    
    &:hover{
        scale: 1.04;
        color: white;
        background: ${(IProps) => IProps? `linear-gradient(${IProps.backgroundColorBottom }, ${IProps.backgroundColorTop} 40%)` : 'black'};
        box-shadow: 17px 17px 15px -20px black;
    }

    @media (max-width: 1010px){
        width: 75%;
        padding: 5px 9px;
        font-size: 23px;
        letter-spacing: 0rem;
        justify-content:center;
    }
`

import styled from "styled-components";

export const Container = styled.section`
    width: auto;
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    padding: 40px 20px;  
`

export const Title = styled.p`
    width: 195px;
    font-size: 34px;
    font-weight: bold;
    font-family: 'Wix Madefor Display', sans-serif;
    position: relative;
    &::after{
        content: '';
        display: block;
        height: 4px;
        width: 60%;
        background-color: #EDB106;
        position: absolute;
    }

    @media (max-width: 1010px) {
        margin-bottom: 5px;
    }
`

export const SubTitle = styled.span`
    font-weight: bold;
    
`

export const ProjectsContainer = styled.div`
    margin-top: 15px;
    
    @media (max-width: 1010px) {
        display: flex;
        overflow-x: auto;
        width: 100%;
        
        ::-webkit-scrollbar {
        height: 7px;
        }
    }   
`

export const ProjectsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 1010px) {
        display: flex;
        padding-bottom: 20px;
        margin: 0 auto;
        gap: 30px;
    }   
`

export const ProjectAncor = styled.a`
`

export const ProjectImage = styled.img`
    height: 300px;
    border: 1px solid #EDB106;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
    &:hover{
        scale: 1.1;
        box-shadow: 30px 33px 54px -40px rgba(0,0,0,.4392156863);
    }
`

export const ProjectTextContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProjectTitle = styled.h1`
    font-family: 'Wix Madefor Display', sans-serif;
    text-align: right;
    font-size: 26px;
    margin: 0;
    letter-spacing: 0.1rem;
`

export const ProjectText = styled.p`
    text-align: right;
    font-size: 19px;
    letter-spacing: 0.1rem;
    color: #404040;
    margin: 0;
`

export const ProjectTechList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
    width: auto;
    gap: 5px;
`

export const ProjectTech = styled.p`
    text-align: right;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.14rem;
    margin: 0;
    transition: 0.4s;
    &:hover{
        color: #EDB106;
        scale: 1.02;
    }
`

export const IconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 0;
    justify-content: flex-end;
`

export const ProjectIcon = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #EDB106;
    right: 0;
    transition: 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        scale: 1.10;
        box-shadow: 15px 15px 20px -15px rgba(0,0,0,.4392156863);
        background-color: #fbd46a;
    }
`

export const IconImage = styled.img`
    height: 66%;
`



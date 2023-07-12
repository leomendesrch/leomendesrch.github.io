import styled from "styled-components";

export const Container = styled.section`
    height: auto;
    width: auto;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1010px) {
        padding-left: 35px;
        align-items: flex-start;
    }
`
export const MaxWidthContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    padding-top: 100px;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    @media (max-width: 1010px) {
    padding-top: 50px;
    }
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;

    @media (max-width: 1010px) {
        margin-bottom: 50px;
    }
`

export const SkillsTitle = styled.h3`
    color: #ccc;
    font-size: 20px;
    letter-spacing: 0.1rem;
    margin: 10px 0;
    position: relative;
    transition: 0.3s;
    margin-bottom: 15px;
    &:before{
        display: inline-block;
        content: "";
        left: 0;
        width: 5px;
        height: 16px;
        background: #EDB106;
        transition: 0.3s;
        margin-right: 15px;
    }

    &:hover::before{
        width: 15px;
    }
`

export const SkillNamesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`

export const SkillNamesBlock = styled.div`
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    width: auto;
    gap: 3px;
    &:hover{
        scale: 1.02;
    }
`

export const SkillNames = styled.span`
    color: white;
    font-size: 25px;
    letter-spacing: 0.1rem;
    margin: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 1010px) {
    font-size: 15px;
    }
`


import styled from "styled-components";

export const Container = styled.section`
    height: auto;
    width: 100%;
    background-color: #141414;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MaxWidthContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    width: 1200px;
    padding-top: 100px;
    background-color: #141414;
    display: flex;
    flex-direction: column;
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
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
    font-size: 24px;
    letter-spacing: 0.1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
`


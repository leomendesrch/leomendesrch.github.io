import styled from "styled-components";

export const Container = styled.li`
  width: 600px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  border: 1px solid #EDB106;
  border-radius: 5px;

  align-items: center;
  text-align: center;

  gap: 20px;

  @media (max-width: 700px) {
    width: 440px;
  }
`

export const Title = styled.p`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 23px;
  margin: 0;

  font-weight: 600;
`

export const Description = styled.span`
  font-size: 18px;
  letter-spacing: 0.1rem;
`

export const Image = styled.img`
  border-radius: 4px;
  border: 1px solid #EDB106;
  width: 90%;
  
`
export const ProjectTechList = styled.div<{ project_techlist: string[]}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 5px 0;
`


export const ProjectTech = styled.p`

  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.15rem;
  margin: 0;
  transition: 0.4s;
  
  &:hover{
      color: #EDB106;
      scale: 1.02;
  }
`

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0;
  justify-content: flex-start;
`

export const ProjectIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #EDB106;
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
    height: 64%;
`
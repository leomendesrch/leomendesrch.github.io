import { Container, Description, IconContainer, IconImage, Image, ProjectIcon, ProjectTech, ProjectTechList, Title } from "./project-slider-model.style";
import ViewIcon from '../../assets/view.png'
import HtmlIcon from '../../assets/html-coding.png'
import { ProjectAncor } from "../LeftProject/leftProject.style";

interface SliderModelProps{
  title: string,
  wallpaper: string,
  text: React.ReactNode
  project_list: string[]
  deploy: string
  repository: string
}

export default function SliderModel({title, wallpaper, text, project_list, deploy, repository}: SliderModelProps){
  return(
    <Container>
      <Title>{title}</Title>
      <Description>{text}</Description>
      <ProjectAncor href={deploy} target="_blank">
      <Image src={wallpaper}></Image>
      </ProjectAncor>
      <ProjectTechList project_techlist={project_list}>
        {project_list.map((tech) => {
          return(<ProjectTech>{tech}</ProjectTech>)
        })}
      </ProjectTechList>
      <IconContainer>
        <ProjectIcon href={deploy} target="_blank">
          <IconImage src={ViewIcon}/>
        </ProjectIcon>
        <ProjectIcon href={repository} target="_blank">
          <IconImage src={HtmlIcon}/>
        </ProjectIcon>
      </IconContainer>
    </Container>
  )
}
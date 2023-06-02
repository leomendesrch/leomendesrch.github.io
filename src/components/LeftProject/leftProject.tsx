import { IconContainer, IconImage, ProjectAncor, ProjectContainer, ProjectIcon, ProjectImage, ProjectTech, ProjectTechList, ProjectText, ProjectTextContainer, ProjectTitle } from "./leftProject.style"
import ViewIcon from '../../assets/view.png'
import HtmlIcon from '../../assets/html-coding.png'

interface Iprops{
    title: string
    text: React.ReactNode
    project_techlist: string[]
    repository: string
    deploy: string
    wallpaper: string
}

function LeftProject({ title, text, project_techlist, repository, deploy, wallpaper }: Iprops){
    return(
        <ProjectContainer>
            <ProjectAncor href={deploy} target="_blank">
                <ProjectImage src={wallpaper}/>
            </ProjectAncor>
            <ProjectTextContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectText>{text}</ProjectText>
                    <ProjectTechList project_techlist={project_techlist}>
                        <ProjectTech>{project_techlist[0]}</ProjectTech>
                        <ProjectTech>{project_techlist[1]}</ProjectTech>
                        <ProjectTech>{project_techlist[2]}</ProjectTech>
                    </ProjectTechList>
                    <IconContainer>
                        <ProjectIcon href={repository} target="_blank">
                            <IconImage src={HtmlIcon}/>
                        </ProjectIcon>
                        <ProjectIcon href={deploy} target="_blank">
                            <IconImage src={ViewIcon}/>
                        </ProjectIcon>
                    </IconContainer>
                    </ProjectTextContainer>

        </ProjectContainer>
    )
}

export default LeftProject
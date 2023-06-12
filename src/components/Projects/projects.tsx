import LeftProject from "../LeftProject/leftProject"
import RightProject from "../RightProject/rightProject"
import { Container, ProjectsContainer, ProjectsList, Title } from "./projects.style"

import YoutubeWallpaper from '../../assets/wallpaper.png'
import MineItWallpaper from '../../assets/MineITWallpaper.png'
import StarWarsWallpaper from '../../assets/StarWars-project.png'
import AnimeEntertainmentWallpaper from '../../assets/AnimeEntertainmentWallpaper.png'

function Projects(){

    return(
        <Container id="section1">
            <Title>PROJETOS</Title>
            <ProjectsContainer>
                <ProjectsList>
                    <RightProject
                    title='Youtube Clone'
                    text={
                        <>
                            Clone da Interface do youtube que foi construída  através do <strong>React</strong> com <strong>typescript
                            </strong> e seus <strong>hook's</strong> como <strong>useState</strong>, <strong>useReff</strong>, <strong>useContext</strong> e algumas <strong>lib's</strong>. Utilizamos para o projeto uma <strong>API</strong> do youtube e uma construida por mim em <strong>Node.JS com Express.Js</strong>
                        </>
                    }
                    project_techlist={['ReactJS', 'Typescript', 'Styled Components', 'Axios', 'MariaDB', 'NodeJS/Express']}
                    repository='https://github.com/leomendesrch/youtube-frontend-project'
                    deploy='https://youtube-frontend-project.vercel.app/'
                    wallpaper={YoutubeWallpaper}
                    />
                    <div style={{marginTop: '120px'}}>
                        <LeftProject
                        title='Mine IT'
                        text={
                            <>
                                Jogo constituído em <strong>html</strong>, <strong>css</strong> e <strong>javascript</strong> onde o principal objetivo é clicar nos campos vazios e revelar os diamantes sem acertar a bomba. 
                                Realizar esse projeto fez com que eu aprimorasse diversos conceitos em <strong>lógica de programação</strong> e <strong>estilização!</strong>
                            </>
                        }
                        project_techlist={['HTML', 'CSS', 'JS']}
                        repository='https://github.com/leomendesrch/mineIT'
                        deploy='https://mine-it.vercel.app/'
                        wallpaper={MineItWallpaper}
                        />
                    </div>

                    <div style={{marginTop: '120px'}}>
                    <RightProject
                        title='Star Wars Characters'
                        text={
                            <>
                                Projeto focado no consumo de uma <strong>API</strong> que retorna personagens e suas informações da franquia star wars, para realizar esse projeto foi utilizada a manipulação dos documentos
                                <strong> HTML</strong> e <strong>CSS</strong> através do <strong>JavaScript</strong>, também foram utilizados diversos <strong>métodos nativos.</strong>
                            </>
                        }
                        project_techlist={['HTML', 'CSS', 'JS', 'ApiRest']}
                        repository='https://github.com/leomendesrch/StarWarsCharacter-project'
                        deploy='https://leomendesrch.github.io/StarWarsCharacter-project/'
                        wallpaper={StarWarsWallpaper}
                        />
                    </div>

                    <div style={{ marginTop: '120px' }}>
                        <LeftProject
                        title='Anime Entertainment'
                        text={
                            <>
                                Website construído em <strong>React</strong>, <strong>Typescript</strong> e <strong>Styled-Components</strong>,
                                esse projeto consome uma <strong>RESTAPI</strong> e retorna pra gente uma lista de animes com filtro baseado no texto inserido na barra de pesquisa.
                            </>
                        }
                        project_techlist={['React', 'Typescript', 'Styled-Components']}
                        repository='https://github.com/leomendesrch/AnimeEntertainment'
                        deploy='https://anime-entertainment.vercel.app/'
                        wallpaper={AnimeEntertainmentWallpaper}
                    />
                    </div>
                </ProjectsList>
            </ProjectsContainer>
        </Container>
    )
}

export default Projects
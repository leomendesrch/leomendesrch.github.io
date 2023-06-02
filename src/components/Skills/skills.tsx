import { Container, MaxWidthContainer, SkillNames, SkillNamesBlock, SkillNamesContainer, SkillsContainer, SkillsTitle } from "./skills.style"

function Skills(){
    return(
        <Container id="section2">
            <MaxWidthContainer>
                <SkillsContainer>
                    <SkillsTitle>Hard Skills</SkillsTitle>
                    <SkillNamesContainer>
                        <SkillNamesBlock>
                            <SkillNames>React.js</SkillNames>
                            <SkillNames>Typescript</SkillNames>
                            <SkillNames>Consumo de API´s</SkillNames>
                            <SkillNames>HTML</SkillNames>
                        </SkillNamesBlock>

                        <SkillNamesBlock>
                            <SkillNames>Responsividade</SkillNames>
                            <SkillNames>Flexbox</SkillNames>
                            <SkillNames>React Hooks</SkillNames>
                            <SkillNames>CSS</SkillNames>
                        </SkillNamesBlock>

                        <SkillNamesBlock>
                            <SkillNames>Git</SkillNames>
                            <SkillNames>GitHub</SkillNames>
                            <SkillNames>NodeJS/Express</SkillNames>
                            <SkillNames>API REST</SkillNames>
                        </SkillNamesBlock>
                    </SkillNamesContainer>
                </SkillsContainer>

                <SkillsContainer>
                    <SkillsTitle>Soft Skills</SkillsTitle>
                    <SkillNamesContainer>
                        <SkillNamesBlock>
                            <SkillNames>Comunicação assertiva</SkillNames>
                            <SkillNames>Pensamento crítico</SkillNames>
                            <SkillNames>Trabalho em equipe</SkillNames>
                            <SkillNames>Otimismo</SkillNames>
                        </SkillNamesBlock>

                        <SkillNamesBlock>
                            <SkillNames>Confiança</SkillNames>
                            <SkillNames>Gerenciamento de tempo</SkillNames>
                            <SkillNames>Valores sociais</SkillNames>
                            <SkillNames>Flexibilidade</SkillNames>
                        </SkillNamesBlock>

                        <SkillNamesBlock>
                            <SkillNames>Resiliência</SkillNames>
                            <SkillNames>Pensamento criativo</SkillNames>
                            <SkillNames>Liderança</SkillNames>
                            <SkillNames>Habilidades de negociação</SkillNames>
                        </SkillNamesBlock>
                    </SkillNamesContainer>
                </SkillsContainer>

                <SkillsContainer>
                    <SkillsTitle>Idiomas</SkillsTitle>
                    <SkillNamesBlock>
                        <SkillNames>Inglês / Intermediário</SkillNames>
                        
                    </SkillNamesBlock>
                </SkillsContainer>
            </MaxWidthContainer>
        </Container>
    )
}

export default Skills
import { Container, MyImage, MyProfile, MyProfileContacts, MyProfileContactsContainer, MyProfileInfo, MyProfileText, MyProfileTitle } from "./aboutMe.style"
import UserIcon from '../../assets/eu.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from "react"

function AboutMe(){

    useEffect(() => {
        ScrollReveal().reveal('.myImage', { delay: 100, origin: 'left', distance: '20px', duration: 800, easing: 'ease-in-out'})
        ScrollReveal().reveal('.myTitle', { delay: 300, origin: 'top', distance: '20px', duration: 800, easing: 'ease-in-out'})
        ScrollReveal().reveal('.myText', { delay: 500, origin: 'top', distance: '20px', duration: 800, easing: 'ease-in-out'})
        ScrollReveal().reveal('.myButtons', { delay: 700, origin: 'bottom', distance: '20px', duration: 800, easing: 'ease-in-out' })
    }, [])
    
    return(
        <Container>
                <MyProfile>
                    <MyImage src={UserIcon} className="myImage"/>
                    <MyProfileInfo >
                        <MyProfileTitle className="myTitle">DESENVOLVEDOR<br></br>FULL STACK</MyProfileTitle>
                        <MyProfileText className="myText">
                            <>
                                Olá 👋 Sou um Desenvolvedor Full Stack com mais de 2 anos de experiência em todo o ciclo de vida de software. 
                                Desde a analise de requisitos até o deploy e monitoramento. Nessa trajetoria atuei em sistemas de logística, gestão e plataformas web, 
                                entregando soluções que melhoram a experiência do usuário, performance e confiabilidade dos sistemas.
                                <br />
                                <strong>Curso Análise e Desenvolvimento de Sistemas pela PUC Minas.</strong>
                            </>
                        </MyProfileText>
                    </MyProfileInfo>
                    <MyProfileContactsContainer className="myButtons">
                        <MyProfileContacts 
                        href="https://drive.google.com/file/d/1OECj5J8bfOM25oFoEJvMRi1zwUuvfyLy/view" 
                        backgroundColorBottom='#fdaa2d' 
                        backgroundColorTop='#ff9900'
                        target="_blank"
                        >Currículo
                        </MyProfileContacts>

                        <MyProfileContacts 
                        href="https://www.linkedin.com/in/leomendesrch" 
                        backgroundColorBottom='#007acc' 
                        backgroundColorTop='#006bb3'
                        target="_blank"
                        >LinkedIn
                        </MyProfileContacts>
                        
                        <MyProfileContacts 
                        href="https://github.com/leomendesrch" 
                        backgroundColorBottom='#1a1a1a' 
                        backgroundColorTop='#262626'
                        target="_blank"
                        >GitHub
                        </MyProfileContacts>
                    </MyProfileContactsContainer>
                </MyProfile>
        </Container>
    )
}

export default AboutMe
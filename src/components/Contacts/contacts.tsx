import { Ancor, ContactsContainer, ContactsElement, ContactsIcon, ContactsName, ContactsText, Container, TextContainer, TextImage } from "./contacts.style"
import EmailIcon from '../../assets/mail.png'
import LogoIcon from '../../assets/logo.png'
import TelephoneIcon from '../../assets/telephone-handle-silhouette.png'
import LinkedInIcon from '../../assets/linkedin.png'
import GitHubIcon from '../../assets/github.png'

function Contacts(){
    return(
        <Container id="section3">
            <TextContainer>
                <TextImage src={LogoIcon}/>
                <ContactsText>Estou disponível para novos<br /> projetos. Entre em contato e <br/>marcamos uma conversa.</ContactsText>
            </TextContainer>
        
            <ContactsContainer>
                <ContactsElement>
                    <ContactsIcon src={EmailIcon}/>
                    <ContactsName><Ancor href="mailto:leomendesrch2005@gmail.com">leomendesrch2005@gmail.com</Ancor></ContactsName>
                </ContactsElement>

                <ContactsElement>
                    <ContactsIcon style={{ height: '18px' }} src={TelephoneIcon}/>
                    <ContactsName><Ancor href='tel:+5531997990242'>+55 31 99799-0242</Ancor></ContactsName>
                </ContactsElement>

                <ContactsElement>
                    <ContactsIcon src={LinkedInIcon}/>
                    <ContactsName><Ancor target="_blank" href='https://www.linkedin.com/in/leonardo-mendes-b43120257/'>LinkedIn</Ancor></ContactsName>
                </ContactsElement>

                <ContactsElement>
                    <ContactsIcon src={GitHubIcon}/>
                    <ContactsName><Ancor target="_blank" href="https://github.com/leomendesrch">GitHub</Ancor></ContactsName>
                </ContactsElement>

            </ContactsContainer>
        </Container>
    )
}

export default Contacts
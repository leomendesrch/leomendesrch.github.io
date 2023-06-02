import { Ancor, Container, FooterText } from "./footer.style"



function FooterComponent(){
    return(
        <Container>
            <FooterText>© 2023 - Design by <Ancor href="https://github.com/Dithan" target="_blank">Thiago Rocha</Ancor> and Code by <Ancor href="https://github.com/leomendesrch" target="_blank">Leonardo Mendes</Ancor>.</FooterText>
        </Container>
    )
}

export default FooterComponent
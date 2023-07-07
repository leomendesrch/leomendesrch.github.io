import { Ancora, Container, HeaderItemCenter, HeaderItems, HeaderItemsContainer, Name } from "./header.style"

function Header(){
    return(
        <Container>
            <Name>Leonardo Mendes</Name>
            <HeaderItemsContainer>
                <HeaderItems><Ancora href="#section1">Projetos</Ancora></HeaderItems>
                <HeaderItems><Ancora href="#section2">Habilidades</Ancora></HeaderItems>
                <HeaderItemCenter><Ancora href="#section3">Contatos</Ancora></HeaderItemCenter>
            </HeaderItemsContainer>
        </Container>
    )
}

export default Header
import { Ancora, Container, HeaderItems, HeaderItemsContainer, Name } from "./header.style"

function Header(){
    return(
        <Container>
            <Name>Leonardo Mendes</Name>
            <HeaderItemsContainer>
                <HeaderItems><Ancora href="#section1">Projetos</Ancora></HeaderItems>
                <HeaderItems><Ancora href="#section2">Habilidades</Ancora></HeaderItems>
                <HeaderItems><Ancora href="#section3">Contatos</Ancora></HeaderItems>
            </HeaderItemsContainer>
        </Container>
    )
}

export default Header
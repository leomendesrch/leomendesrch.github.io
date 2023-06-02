import { Container, MaxWidthContainer } from './app.style';
import Header from './components/Header/header';
import HomePage from './pages/Home/home';
import Skills from './components/Skills/skills';
import Contacts from './components/Contacts/contacts';
import FooterComponent from './components/Footer/footer';
function App() {
  return (
    <MaxWidthContainer>
      <Container>
        <Header/>
        <HomePage/>
      </Container>
      <Skills/>
      <Contacts />
      <FooterComponent />
    </MaxWidthContainer>
  );
}

export default App;

import { Container } from './app.style';
import Header from './components/Header/header';
import HomePage from './pages/Home/home';
import Skills from './components/Skills/skills';
import Contacts from './components/Contacts/contacts';
import FooterComponent from './components/Footer/footer';
function App() {
  return (
    <Container>
      <Header/>
      <HomePage/>
      <Skills/>
      <Contacts />
      <FooterComponent />
    </Container>
  );
}

export default App;

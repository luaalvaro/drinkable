import { Container, Header, Content, Hero, SearchDrink, RandomDrinks } from './components'

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Hero />
        <SearchDrink />
        <RandomDrinks />
      </Content>
    </Container>
  );
}

export default App;

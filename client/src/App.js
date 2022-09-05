import { Cart } from "./Components/Partials/Cart";
import { Button } from "./Components/StyledComponents/Button.Styled";
import { Heading } from "./Components/StyledComponents/Heading.Styled";
function App() {
  return (
    <>
      <header><Heading>header</Heading></header>
      <main><Heading as="h2">main</Heading>
        <Heading as="h3">main</Heading>
        <Button>Tryk på mig</Button>
        <Cart />
      </main>
      <footer><Heading as="h4">footer</Heading></footer>
    </>
  );
}

export default App;

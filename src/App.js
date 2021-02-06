import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import { Main, StyledApp } from "./styles/index";
function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Main>
          <h1> hello</h1>
          <h1> hello</h1>
        </Main>
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

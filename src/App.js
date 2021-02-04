import { BrowserRouter } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Main from "./containers/Main";
import { StyledApp } from './style/index';
function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Supi from './containers/Main/Supi'
import { StyledApp } from './style/index';
function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/supi' component={Supi} />
        </Switch>
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Content from "./containers/Main/Content";
import Main from "./containers/Main";
import Category from "./containers/Main/CategoryList";
import Dostavka from "./containers/Main/Dostavka";
import Oplata from "./containers/Main/Oplata";
import Support from "./containers/Main/Support";
import { StyledApp } from "./style/index";
import Reviews from "./components/Reviews";
import Basket from "./containers/Main/Basket";
import Personal from "./containers/Main/Personal";
import History from './containers/Main/History'

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category/:type" component={Category} />
          <Route exact path="/deliver" component={Dostavka} />
          <Route exact path="/oplata" component={Oplata} />
          <Route exact path="/poddershka" component={Support} />
          <Route exact path="/content" component={Content} />
          <Route exact path="/cart" component={Personal} />
          <Route exact path="/reservation" component={Basket} />
          <Route exact path="/data" component={History} />
        </Switch>
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

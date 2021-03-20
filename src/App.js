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
import History from "./containers/Main/History";
import { productContext } from "./components/productContext";
import product from "./db/products";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <productContext.Provider value={product}>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/category/:type" component={Category} />
            <Route exact path="/deliver" component={Dostavka} />
            <Route exact path="/oplata" component={Oplata} />
            <Route exact path="/poddershka" component={Support} />
            <Route exact path="/personal" component={Personal} />
            <Route exact path="/cart" component={Content} />
            <Route exact path="/reservation" component={Basket} />
            <Route exact path="/data" component={History} />
          </Switch>
          <Footer />
        </productContext.Provider>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

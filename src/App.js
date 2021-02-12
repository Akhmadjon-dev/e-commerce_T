import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Category from "./containers/Main/CategoryList";
import Dostavka from "./containers/Main/Dostavka";
import Oplata from "./containers/Main/Oplata";
import Support from "./containers/Main/Support";
import { StyledApp } from "./style/index";


function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/deliver" component={Dostavka} />
          <Route exact path="/oplata" component={Oplata} />
          <Route exact path="/poddershka" component={Support} />
        </Switch>
        <Footer />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;

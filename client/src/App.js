import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Navbarr from "./components/Navbarr";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navbarr />
        <Switch>
          <Route path="/admin" component={AdminScreen } />

          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/orders" component={OrderScreen} exact />

          <Route path="/cart" component={CartScreen} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policy} exact />
          <Route path="/" component={HomeScreen} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import AddressForm from "./components/AddressForm";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();
  const [address, setAddress] = useState({
    doorno: null,
    streetname: null,
    town: null,
    district: null,
    state: null,
    pincode: null,
  });

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100 bg-info">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact ><Home address={address}/></Route>
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/address"><AddressForm address={address} setAddress={setAddress}/></Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
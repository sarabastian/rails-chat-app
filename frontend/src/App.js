import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [isLoggedIn, login] = React.useState(false);

  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      login(true);
    }
  };

  useEffect(() => {
    handleLogin();
  });

  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

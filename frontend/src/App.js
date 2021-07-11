import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import Login from "./Login";
import SignUp from "./Signup";
import PatientPage from "./PatientPage";
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
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/login"
          component={() => (
            <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
          )}
        />
        <Route
          exact
          path="/signup"
          component={() => <SignUp handleLogin={handleLogin} />}
        />
        <Route exact path="/patient-home" component={PatientPage} />
      </Switch>
    </Router>
  );
}

export default App;

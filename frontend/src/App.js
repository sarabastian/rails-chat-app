import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import Login from "./Login";
import SignUp from "./Signup";
import NewMessage from "./patients/NewMessage";
import PatientPage from "./patients/PatientPage";
import PatientPartnerPage from "./patientPartners/PatientPartnerPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [isLoggedIn, login] = React.useState(false);

  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      login(true);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

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
        <Route exact path="/new-message" component={NewMessage} />
        <Route
          exact
          path="/patient-partner-home"
          component={PatientPartnerPage}
        />

        <Route
          exact
          path="/logout"
          component={() => {
            localStorage.clear();

            return <Redirect to="/login" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;

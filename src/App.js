import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </HashRouter>
  );
}

export default App;

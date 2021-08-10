import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { login } from "./store/Store";
import { auth } from "./utils/firebase";
import LoadingTool from "./components/LoadingTool";

function App({ store, doLogin }) {
  const { authenticate } = store;
  const [loading, setLoading] = useState(true);
  console.log("App START", loading);

  useEffect(() => {
    console.log("App RENDERED");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("App onAuthStateChanged", user);
      if (user) {
        doLogin(user.email);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    });
    return unsubscribe;
  }, [doLogin]);

  return (
    <HashRouter>
      {loading && <LoadingTool />}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            authenticate.isAuth ? (
              <Redirect to="/main" />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setLoading={setLoading} />}
        />
        <Route
          exact
          path="/main"
          render={(props) => <Main {...props} setLoading={setLoading} />}
        />
        <Route
          exact
          path="/ipolist"
          component={() => {
            window.location.href = "http://sereon.synology.me:38888/po/IPOlist";
            return null;
          }}
        />
      </Switch>
    </HashRouter>
  );
}

function mapStateToProps(state) {
  return { store: state };
}
function mapDispatchToProps(dispatch) {
  return {
    doLogin: (user) => dispatch(login({ user: user, isAuth: true })),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

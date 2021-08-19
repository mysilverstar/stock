import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { logon } from "./store/Store";
import { auth } from "./utils/firebase";
import LoadingTool from "./pages/LoadingTool";
import Backup from "./pages/Backup";

function App({ store, setUser }) {
  const { authenticate } = store;
  console.log("App START");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App RENDERED - registering");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("App onAuthStateChanged", user);
      setUser(user?.email);
      if (!user) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    });
    return unsubscribe;
  }, [setUser]);

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
          path="/backup"
          render={(props) => <Backup {...props} setLoading={setLoading} />}
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
    setUser: (user) => dispatch(logon(user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

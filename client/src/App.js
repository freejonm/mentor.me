import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
import LoginForm from './pages/Auth/LoginForm';
import Landing from './pages/Landing';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import StickyFooter from './components/StickyFooter';

import Dashboard from './pages/Dashboard';
import Details from './pages/Auth/Details';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Item from './components/Theme/item';

import AUTH from './utils/AUTH';
import EditProfile from './pages/EditProfile';
import MemberProfile from './pages/MemberProfile';
import Chat from './pages/Chat';
import ResourceFeed from './pages/ResourceFeed';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    AUTH.getUser().then((response) => {
      if (!!response.data.user) {
        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    return () => {
      setLoggedIn(false);
      setUser(null);
    };
  }, []);

  const logout = (event) => {
    event.preventDefault();

    AUTH.logout().then((response) => {
      if (response.status === 200) {
        setLoggedIn(false);
        setUser(null);
      }
    });
  };

  const login = (username, password) => {
    AUTH.login(username, password).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
          setLoggedIn(true);
        setUser(response.data.user);
      }
    });
  };

  return (
    <Router>
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Item />
        <Nav loggedIn={loggedIn} />

        <div className="content">
          <Route exact path="/" component={Landing} />
          {/* {loggedIn && ( */}
            <Switch>
              <Route
                exact
                path="/dashboard"
            > 
            {console.log('user', user)}
            <Dashboard user={user}></Dashboard>
            </Route>
              <Route exact path="/details" component={Details} />
              <Route exact path="/editprofile" component={EditProfile} />
              <Route
                exact
                path="/memberprofile/:userId"
                component={MemberProfile}
              />
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/resourcefeed" component={ResourceFeed} />
            {/* </Switch>
          )}
          {!loggedIn && (
            <Switch> */}
              <Route
                exact
                path="/login"
                component={() => <LoginForm login={login} user={user} />}
              />
              <Route exact path="/register" component={Register} />
            </Switch>
          {/* )} */}
        </div>
        <StickyFooter />
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;

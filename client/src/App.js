import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
// import ParticleBG from './ParticleBG';
import LoginForm from './pages/Auth/LoginForm';
import Landing from './pages/Landing';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Auth/Register';
import StickyFooter from './components/StickyFooter';

import Dashboard from './pages/Dashboard';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Item from './components/Theme/item';

// import SignupForm from './pages/Auth/SignupForm';
// import NoMatch from "./pages/NoMatch";
import AUTH from './utils/AUTH';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.getUser().then((response) => {
      // console.log(response.data);
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
      // console.log(response.data);
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
        // update the state
        window.location.href = '/dashboard';
        setLoggedIn(true);
        setUser(response.data.user);
      }
    });
  };

  // return (
  //   <div className="App">
  //     { loggedIn && (
  //       <div>

  //         <Nav user={user} logout={logout}/>
  //         <div className="main-view">

  //           <Switch>
  //             <Route exact path="/" component={Books} />
  //             <Route exact path="/books" component={Books} />
  //             <Route exact path="/books/:id" component={Detail} />
  //             <Route component={NoMatch} />
  //           </Switch>
  //         </div>
  //       </div>
  //     )}
  //     { !loggedIn && (
  //       <div className="auth-wrapper" style={{paddingTop:40}}>

  //         <Route exact path="/" component={() => <LoginForm login={login}/>} />
  //         <Route exact path="/books" component={() => <LoginForm user={login} />} />

  //         <Route exact path="/signup" component={SignupForm} />
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Item />
        <Nav loggedIn={loggedIn} />
        <div className="content">
          <Route exact path="/" component={Landing} />

          {loggedIn && (
            <Router>
              <Route exact path="/dashboard" component={Dashboard} />
            </Router>
          )}
          {!loggedIn && (
            <Router>
              <Route
                exact
                path="/login"
                component={() => <LoginForm login={login} />}
              />
              <Route exact path="/register" component={Register} />
            </Router>
          )}
        </div>
        <StickyFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;

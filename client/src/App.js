import React, { useState, useEffect } from 'react';
 
import Nav from './components/Nav';
import ParticleBG from './ParticleBG';
import LoginForm from './pages/Auth/LoginForm';
import Landing from './pages/Landing';

import {BrowserRouter as Router, Route} from "react-router-dom"
import Register from './pages/Register'; 
import StickyFooter from './components/StickyFooter';

// import LoginForm from './pages/Auth/LoginForm';

import Dashboard from './pages/Dashboard';


// import SignupForm from './pages/Auth/SignupForm';
// import NoMatch from "./pages/NoMatch";
// import AUTH from './utils/AUTH';
function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   AUTH.getUser().then(response => {
  //       // console.log(response.data);
  //       if (!!response.data.user) {
  //         setLoggedIn(true);
  //         setUser(response.data.user);
  //       } else {
  //         setLoggedIn(false);
  //         setUser(null);
  //       }
  //     });

  //     return () => {
  //       setLoggedIn(false);
  //       setUser(null);
  //     };
  // }, []);

  // const logout = (event) => {
  //   event.preventDefault();

  // 	AUTH.logout().then(response => {
  // 		// console.log(response.data);
  // 		if (response.status === 200) {
  // 			setLoggedIn(false);
  //       setUser(null);
  // 		}
  // 	});
  // };

  // const login = (username, password) => {
  // 	AUTH.login(username, password).then(response => {
  //     console.log(response.data);
  //     if (response.status === 200) {
  //       // update the state
  //       setLoggedIn(true);
  //       setUser(response.data.user);
  //     }
  //   });
  // };

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
      <Nav />
      <ParticleBG />

      
      {/* <LoginForm /> */}
      <Router>
          <Route exact path = "/"  component = {Landing}/>
          <Route exact path = "/login" component = {LoginForm} />
          <Route exact path = "/register" component = {Register} />
          <Route exact path = "/dashboard" component = {Dashboard} />
          
      </Router>

      <StickyFooter />
          

    </div>
  );
}

export default App;

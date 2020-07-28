import React from 'react';
import ChatMessageBox from './components/ChatMessageBox/ChatMessageBox'
// Re-using my ErrorBoundary Component 
// import ErrorBoundary from 'react-error-boundary';

import React from 'react';
import LoginComponent from './components/LoginComponent';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import history from '../history'
import BoardUser from './components/user-board.component';
import BoardModerator from './components/moderator-board.component'
import BoardAdmin from './components/admin-board.component'
import SignUpComponent from './components/SignUpComponent';

class App extends React.Component {

  refreshPage() {
    window.location.reload();
  }

  // render() {
  //   return (
  //     <ChatMessageBox/>
  //   )
  // }

  render() {
    return <div>
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={"/login"} component={LoginComponent} />
                <Route exact path={"/profile"} component={Profile} />
                <Route exact path={"/user"} component={BoardUser} />
                <Route exact path={"/moderator"} component={BoardModerator} />
                <Route exact path={"/admin"} component={BoardAdmin} />
                <Route exact path={"/signup"} component={SignUpComponent} />
            </Switch>
        </Router>
    </div>
}
}

export default App;

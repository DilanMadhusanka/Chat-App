import React from 'react';
// import ChatMessageBox from './components/ChatMessageBox/ChatMessageBox'
// Re-using my ErrorBoundary Component 
// import ErrorBoundary from 'react-error-boundary';

import LoginComponent from './components/Authentication/LoginComponent';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import NavBar from './components/NavigationBar/NavBar';
import history from './history'
import BoardUser from './components/role-board.component/user-board.component';
import BoardModerator from './components/role-board.component/moderator-board.component'
import BoardAdmin from './components/role-board.component/admin-board.component'
import SignUpComponent from './components/Authentication/SignUpComponent';
import ChatMessageBox from './components/ChatMessageBox/ChatMessageBox';

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
          <Route exact path={"/user"} component={BoardUser} />
          <Route exact path={"/moderator"} component={BoardModerator} />
          <Route exact path={"/admin"} component={BoardAdmin} />
          <Route exact path={"/signup"} component={SignUpComponent} />
          <Route exact path={"/chat"} component={ChatMessageBox} />
        </Switch>
      </Router>
    </div>
  }
}

export default App;

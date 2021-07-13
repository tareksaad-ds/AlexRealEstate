import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp';
import store from './store';
import Landing from './components/Landing';
import Projects from './components/Projects';
import PPage from './components/PPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={PPage} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;

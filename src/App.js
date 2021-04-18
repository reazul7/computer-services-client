import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import UserService from './components/Dashboard/UserService/UserService';
import PlaceService from './components/PlaceService/PlaceService';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Order from './components/Dashboard/Order/Order';
import Review from './components/Dashboard/Review/Review';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/placeService/:id">
            <PlaceService></PlaceService>
          </PrivateRoute>
          <Route path="/serviceListO">
            <UserService></UserService>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/mainAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Topbar from "./component/topbar/Topbar"
import Sidebar from "./component/sidebar/Sidebar"
import Homebar from "./component/homebar/Homebar"

import Home from "./pages/home/Home"
import Homepage from "./pages/homepage/Homepage"
import UserList from "./pages/userList/userList"
import MovieList from "./pages/movieList/movieList"
import User from "./pages/user/User"
import Movie from "./pages/movie/Movie"
import NewUser from "./pages/newUser/newUser"
import NewMovie from "./pages/newMovie/NewMovie"
import Login from "./pages/login/Login"

import useToken from './useToken';

import "./app.css"

function App() {

  const { token, setToken } = useToken();

  //if token is not found popup login component
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/dashboard">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <Home/>
            </div>
          </Route>
          <Route path="/users">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <UserList/>
            </div>
          </Route>
          <Route path="/user/:userId">
          <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <User/>
            </div>
          </Route>
          <Route path="/movies">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <MovieList/>
            </div>
          </Route>
          <Route path="/movie/:movieId">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <Movie/>
            </div>
          </Route>
          <Route path="/newUser">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <NewUser/>
            </div>
          </Route>
          <Route path="/newMovie">
            <Sidebar/>
            <div className="conMain">
              <Topbar/>
              <NewMovie/>
            </div>
          </Route>
          <Route path ="*">
            <div className="conMain">
              <Homebar/>
              <Homepage/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

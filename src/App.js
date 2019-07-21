import React, {Component} from 'react';
// INSTALLED REACT ROUTER DOM FOR ROUTING
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component = {ExercisesList} />
          <Route path="/edit/:id" component = {EditExercise} />
          <Route path="/create" component = {CreateExercise} />
          <Route path="/user" component = {CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;

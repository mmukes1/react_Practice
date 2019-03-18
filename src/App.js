import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import RepeatForm from "./components/RepetiveComponets/RepeatForm";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Public Routes */}
          <Route exact path="/form" component={Form} />
          <Route exact path="/repeatform" component={RepeatForm} />
        </div>
      </Router>
    );
  }
}

export default App;

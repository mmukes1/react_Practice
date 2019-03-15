import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./componets/Form";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Public Routes */}
          <Route exact path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;

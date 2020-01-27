import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Landing from "./Landing";
import * as actions from "../actions";
const Dashboard = () => <h2>Dashboard</h2>;
const SurvayNew = () => <h2>SurvayNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurvayNew} />
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null, actions)(App);

import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import logo from "./logo.svg";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
     {/* {this.props.loading && <img src={logo} className="App-logo" />} */}
     <br/><br/>
     <input onKeyPress={(e) => {(e.key === 'Enter' ? this.props.onEnter(e)  : null)}} /> 
     {/* <input type='text'></input> */}
     <br/><br/>
     todolist : <span>{ ' ' + this.props.todolist}</span>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading,
    todolist: state.todolist

  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onEnter: (e) => dispatch(actionCreator.addTolist(e))

  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

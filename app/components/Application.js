import React, {Component} from 'react';
import Nav from "./Nav/Nav"
export default class App extends Component {
  render() {
    return (
      <div className="Application">
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

import React from "react";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Head from "./Head.js";
import dataSet from "../data/data.json";

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: dataSet,
      };
  }
  render() {
      return (
        <div id="page">
          <table className="job-applicants">
            <Head />
            <Body data={this.state.data}/>
            <Footer data={this.state.data}/>
          </table>
        </div>
      );
  }
}

import React from "react";
import Body from "./Body.js";
import Footer from "./Footer.js";
import dataSet from "../data/data.json";

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: dataSet,
      };
  }
  render() {
    console.log(this.state.data);
      return (
        <div id="page">
          <table className="job-applicants">
            <thead>
              <tr>
                <th>Job</th>
                <th>Applicant Name</th>
                <th>Email Address</th>
                <th>Website</th>
                <th>Skills</th>
                <th>Cover Letter Paragraph</th>
              </tr>
            </thead>
            <tbody>
              <Body />
            </tbody>
            <tfoot>
              <Footer />
            </tfoot>
          </table>
        </div>
      );
  }
}

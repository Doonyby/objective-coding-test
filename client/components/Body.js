import React from "react";
import TableBody from "./TableBody.js";

export default class Body extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: this.props.data
      }
  }
  componentWillMount() {
    let applicants = this.state.data.applicants;
    let jobs = this.state.data.jobs;
    let skills = this.state.data.skills;
    //refactor data to make data easier to access
    let refactorData = () => {
      let refactoredData = [];
      //filter skills into each applicant
      let getApplicantSkills = (newJobObj) => {
        let job = newJobObj;
        let counter = 0;
        let getApplicant = job.applicantArr.forEach((item, index) => {
          let skillFilter = skills.filter((skill) => {
            return item.id == skill.applicant_id;
          })
          job.applicantArr[index].skills = skillFilter;
          //counted skills and gave the new job object a key/value that tells child size of job rowSpan
          counter = counter + job.applicantArr[index].skills.length;
        })
        job.skillCount = counter;
        refactoredData.push(job);
      }
      //filter applicants into jobs
      let jobFilter = jobs.forEach((item, index) => {
        let newJobObj = item;
        let applicantFilter = applicants.filter((job) => {
          return job.job_id == newJobObj.id;
        })
        newJobObj.applicantArr = applicantFilter;
        getApplicantSkills(newJobObj);
      })
      //set local state to refactored json object
      this.setState({
        data: refactoredData,
      });
    }
    return refactorData();
  }
  render() {
    return (
      <TableBody data={this.state.data} />
    )
  }
}

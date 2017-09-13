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
      let getApplicantSkills = (jobObj) => {
        let job = jobObj;
        let counter = 0;
        let getApplicant = jobObj.applicantArr.forEach((item, index) => {
          let skillFilter = skills.filter((skill) => {
            return item.id == skill.applicant_id;
          })
          job.applicantArr[index].skills = skillFilter;
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

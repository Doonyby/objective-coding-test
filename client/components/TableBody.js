import React from "react";

export default function TableBody (props) {
  let buildTableBody = () => {
    let tableBody = [];
    console.log(props.data);
    let buildJobs = props.data.map((job, jobIndex) => {
      let buildApplicant = job.applicantArr.map((applicant, applicantIndex) => {
        let buildSkill = applicant.skills.map((skill, skillIndex) => {
          if (skillIndex == 0) {
            tableBody.push(
              <tr key={"applicant" + jobIndex + applicantIndex}>
                <td rowSpan={job.skillCount} className="job-name">{job.name}</td>
                <td rowSpan={applicant.skills.length} className="applicant-name">{applicant.name}</td>
                <td rowSpan={applicant.skills.length}><a href={"mailto:" + applicant.email}>{applicant.email}</a></td>
                <td rowSpan={applicant.skills.length}><a href={applicant.website}>{applicant.website}</a></td>
                <td>{skill.name}</td>
                <td rowSpan={applicant.skills.length}>{applicant.cover_letter}</td>
              </tr>
            )
          }
          else {
            tableBody.push(
              <tr key={"applicant" + jobIndex + applicantIndex + skillIndex}>
                <td>PHP</td>
              </tr>
            )
          }
        });
      });
    });
    return tableBody;
  }
  return (
    <tbody>
      {buildTableBody()}
    </tbody>
  );
}

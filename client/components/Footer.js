import React from "react";

export default function Footer(props) {
  let findSkills = () => {
    let uniqueSkills = [];
    let skillNames = props.data.skills.map((item) => {
      if (uniqueSkills.indexOf(item.name) === -1) {
        uniqueSkills.push(item.name);
      }
    });
    return uniqueSkills.length
  }
  return (
    <tfoot>
      <tr>
        <td colSpan="6">{props.data.applicants.length} Applicants, {findSkills()} Unique Skills</td>
      </tr>
    </tfoot>
  );
}

import React from "react";
import { JetType, JetColor } from "../enums";

const DetailsPanel = ({ selectedJet }) => {
  let content = <span>Please select a Jet.</span>;
  if (selectedJet) {
    content = (
      <table>
        <tr>
          <th scope="row">ID</th>
          <td>{selectedJet.id}</td>
        </tr>
        <tr>
          <th scope="row">Color</th>
          <td>{JetColor[selectedJet.color]}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>{JetType[selectedJet.type]}</td>
        </tr>
        <tr>
          <th scope="row">Location</th>
          <td>{`${selectedJet.location.latitude} ${selectedJet.location.longitude} ${selectedJet.location.height}`}</td>
        </tr>
        <tr>
          <th scope="row">Direction</th>
          <td>{selectedJet.direction}</td>
        </tr>
      </table>
    );
  }
  return (
    <>
      <h1>Details Panel</h1>
      {content}
    </>
  );
};

export default DetailsPanel;

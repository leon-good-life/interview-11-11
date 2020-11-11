import React from "react";
import { JetType, JetColor } from "../enums";

const Table = ({ jets, onSelect }) => (
  <>
    <h1>List</h1>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Color</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        {jets.map((jet) => (
          <tr key={jet.id} onClick={() => onSelect(jet)}>
            <th scope="row">{jet.id}</th>
            <td>{JetColor[jet.color]}</td>
            <td>{JetType[jet.type]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Table;

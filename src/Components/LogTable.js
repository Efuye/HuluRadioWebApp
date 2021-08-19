import React from "react";
import { Table } from "reactstrap";

const LogsTable = (props) => {
  return (
    <Table
      className="m-4 p-4"
      style={{
        width: "70em",
      }}
      striped
    >
      <thead>
        <tr>
          {/* Tag Username Created At Method route statusCode ResponseTime */}
          <th>Tag </th>
          <th>User Name</th>
          <th>Created At</th>
          <th>Method</th>
          <th>Route</th>
          <th>Status Code </th>
          <th>Response Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tag </td>
          <td>User Name</td>
          <td>Created At</td>
          <td>Metdod</td>
          <td>Route</td>
          <td>Status Code </td>
          <td>Response </td>
        </tr>
        <tr>
        <td>Tag </td>
          <td>User Name</td>
          <td>Created At</td>
          <td>Metdod</td>
          <td>Route</td>
          <td>Status Code </td>
          <td>Response </td>
        </tr>
        <tr>
        <td>Tag </td>
          <td>User Name</td>
          <td>Created At</td>
          <td>Metdod</td>
          <td>Route</td>
          <td>Status Code </td>
          <td>Response </td>
        </tr>
     
      </tbody>
    </Table>
  );
};

export default LogsTable;

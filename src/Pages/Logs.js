import React from "react";
import LogsTable from "../Components/LogTable";
export default function Logs() {
  return (
    <div>
      <h1
      style={{
        textAlign: "center",
        fontSize: "2.5em",
        marginBottom: "1em",
        marginTop: "0.8em"

      }}
      >Admin Logs</h1>
      <LogsTable />
    </div>
  );
}

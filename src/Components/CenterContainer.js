import React from "react";
import { data } from "../Data/data";
export default function CenterContainer() {
  return (
    <div className="centerContainer">
      {data.map((item) => {
        return (
          <AlbumCard
            stationName={item.stationName}
            lastUpdated={item.stationLastUpdated}
            icon={item.stationIcon}
          />
        );
      })}
    </div>
  );
}

function AlbumCard({ stationName, icon, lastUpdated }) {
  return (
    <div className="albumCardContainer">
      <img src={icon} alt="user" />

      <h6>{stationName} </h6>
      <h6>{lastUpdated}</h6>
    </div>
  );
}

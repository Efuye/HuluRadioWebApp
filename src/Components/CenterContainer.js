import React, { useContext } from "react";

import { Context } from "../Store/Store";
import Logs from "../Pages/Logs";
export default function CenterContainer() {
  const [state, setState] = useContext(Context);

  // console.log(state.activeStation);

  return (
    <div className="centerContainer">
      {state.admin ? (
        <Logs />
      ) : (
        state.data.map((item) => {
          return (
            <div
              onClick={() =>
                setState({
                  ...state,
                  activeStation: {
                    id: item.stationId,
                    stationName: item.stationName,
                    icon: item.stationIcon,
                    stationDescription: item.stationDescription,
                    stationStreamUrl: item.stationStreamUrl,
                    stationType: item.stationType,
                    stationViewership: item.stationViewership,
                    stationWebsite: item.stationWebsite,
                    stationLastUpdated: item.stationLastUpdated,
                  },
                })
              }
            >
              <AlbumCard
                stationName={item.stationName}
                lastUpdated={item.stationLastUpdated}
                icon={item.stationIcon}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

function AlbumCard({ stationName, icon }) {
  return (
    <div className="albumCardContainer">
      <img src={icon} alt="user" />
      <h4>{stationName} </h4>
    </div>
  );
}

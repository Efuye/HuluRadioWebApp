import React, { useState, useContext } from "react";
import { Collapse, Button, Row, Col } from "reactstrap";
import { GrFormNext } from "react-icons/gr";

import { Context } from "../Store/Store";
export default function Menutab() {
  const adminOptions = ["Auth", "Aoth", "Accounting"];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdmin, setIsOpenAdmin] = useState(false);

  const [activeBtn, setActiveBtn] = useState("");
  const [state, setState] = useContext(Context);
  console.log(state);
  const toggle = () => setIsOpen(!isOpen);
  const toggleAdmin = () => setIsOpenAdmin(!isOpenAdmin);
  return (
    <div className="sideContainers">
      <Button
        className="menuButton"
        color="#ef8f68"
        outline
        onClick={toggle}
        style={{ marginBottom: "1rem", color: "#ef8f68", fontSize: "20px" }}
      >
        Radios
      </Button>

      <Collapse isOpen={isOpen}>
        <Row>
          <Col md={1}>{""}</Col>

          <Col>
            {state.data.map((item) => (
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
                className={
                  activeBtn === item.stationId
                    ? "btnContainerActive"
                    : "btnContainer"
                }
                key={item.id}
                md={10}
              >
                <label onClick={() => setActiveBtn(item.stationId)} color="">
                  {item.stationName}

                  {activeBtn === item.stationId ? (
                    <GrFormNext
                      style={{
                        marginLeft: "1em",
                        marginRight: "1em",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            ))}
          </Col>
        </Row>
      </Collapse>

      <Button
        className="menuButton"
        color="#ef8f68"
        outline
        onClick={toggleAdmin}
        style={{ marginBottom: "1rem", color: "#ef8f68", fontSize: "20px" }}
      >
        Admin
      </Button>

      <Collapse isOpen={isOpenAdmin}>
        <Row>
          <Col md={1}>{""}</Col>

          <Col>
            {adminOptions.map((item) => (
              <div
                className={
                  activeBtn === item.stationId
                    ? "btnContainerActive"
                    : "btnContainer"
                }
                key={item.id}
                md={10}
              >
                <label onClick={() => setActiveBtn(item)} color="">
                  {item}

                  {activeBtn === item ? (
                    <GrFormNext
                      style={{
                        marginLeft: "1em",
                        marginRight: "1em",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </label>
              </div>
            ))}
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

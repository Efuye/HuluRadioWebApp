import React, { useState } from "react";
import { Collapse, Button, Row, Col } from "reactstrap";
import { GrFormNext } from "react-icons/gr";
import { data } from "../Data/data";
export default function Menutab() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);

  const toggle = () => setIsOpen(!isOpen);
  console.log(activeBtn);
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
          <Col md={2}>{""}</Col>

          <Col>
            {data.map((item) => (
              <div
                className={
                  activeBtn === item.stationId
                    ? "btnContainerActive"
                    : "btnContainer"
                }
                key={item.id}
                md={9}
              >
                {/* <label type="button" class="btn btn-primary btn-block" /> */}
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

                  {/* /> */}
                </label>
              </div>
            ))}
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

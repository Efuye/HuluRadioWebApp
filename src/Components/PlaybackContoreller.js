import React, { useState, useContext } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col, Button } from "reactstrap";

import { BsPlay } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";
import { ImNext2, ImPrevious2 } from "react-icons/im";
import { Context } from "../Store/Store";

export default function PlaybackContoreller() {
  const [value, setValue] = useState(0);
  const [state, ] = useContext(Context);
  // console.log(state);
  return (
    <Row className="playBackContainer">
      <Col md={4} className="nowplayindContainer">
        <img src={state.activeStation.icon} alt="user" />
        <div className="songTitleContainer ">
          <h5>{state.activeStation.stationName} </h5>
          <p>{state.activeStation.stationStreamUrl} </p>
        </div>
      </Col>
      <Col md={2} className="seekerContainer">
        <div>
          <Button className="m-1 pr-4 pl-4" size="lg" color="warning" outline>
            <ImPrevious2 size={20} />
          </Button>

          <Button className="m-1 p-3" size="lg" color="warning" outline>
            <BsPlay size={20} />
          </Button>
          <Button className="m-1 pr-4 pl-4" size="lg" color="warning" outline>
            <ImNext2 size={20} />
          </Button>
        </div>
      </Col>

      <Col md={6} className="seekerContainer">
        <p>4:33</p>

        <div
          style={{
            width: "100%",
          }}
        >
          <RangeSlider
            size="lg"
            min={0}
            max={200}
            toolip="on"
            value={value}
            variant="warning"
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
          />
        </div>
        <Button outline>
          <AiFillSound color="white" />
        </Button>
      </Col>
    </Row>
  );
}

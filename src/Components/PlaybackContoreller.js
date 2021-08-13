import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Row, Col, Button } from "reactstrap";
import album from "../Assets/album.jpeg";
import { BsPlay } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";

import { ImNext2, ImPrevious2 } from "react-icons/im";
export default function PlaybackContoreller() {
  const [value, setValue] = useState(0);
  return (
    <Row className="playBackContainer pr-4">
      <Col md={3} className="nowplayindContainer">
        <img src={album} alt="user" />
        <div className="songTitleContainer ">
          <h3>current song name playing </h3>
          <h5>current name of artist </h5>
        </div>
      </Col>
      <Col md={3} className="seekerContainer">
        <div>
          <Button className="m-1 pr-4 pl-4" size="lg" color="warning" outline>
            <ImPrevious2 size={40} />
          </Button>

          <Button className="m-1 p-3" size="lg" color="warning" outline>
            <BsPlay size={40} />
          </Button>
          <Button className="m-1 pr-4 pl-4" size="lg" color="warning" outline>
            <ImNext2 size={40} />
          </Button>
        </div>
      </Col>

      <Col md={6} className="seekerContainer">
        <p>4:33</p>

        <div
          style={{
            width: "78%",
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

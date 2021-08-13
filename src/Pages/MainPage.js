import React from "react";
import Menutab from "../Components/Menutab";
import CenterContainer from "../Components/CenterContainer";
import UsersColumn from "../Components/UsersColumn";
import PlaybackContoreller from "../Components/PlaybackContoreller";

import { Col, Row } from "reactstrap";

export default function MainPage() {
  return (
    <div className="parentParentContainer">
      <Row>
        <Col>
          <Menutab />
        </Col>

        <Col>
          <CenterContainer />
        </Col>

        <Col>
          <UsersColumn />
        </Col>
      </Row>
      <Row>

        <PlaybackContoreller />
      </Row>
    </div>
  );
}

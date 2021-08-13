import React from "react";
import { Col, Row } from "reactstrap";
import userIcon from "../Assets/user.png";
export default function UsersColumn() {
  return (
    <div className="sideContainers">
      users thh nbhbhbh
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export function UserCard() {
  return (
    <div className="userCard">
      <Row>
        <Col md={4}>
          <img src={userIcon} alt="user" />
        </Col>


        <Col md={8}>
          <p>firstName lastName</p>
          <small>2.8mil followers</small>
        </Col>
      </Row>
    </div>
  );
}

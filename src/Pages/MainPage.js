import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

import Menutab from "../Components/Menutab";
import CenterContainer from "../Components/CenterContainer";
import UsersColumn from "../Components/UsersColumn";
import PlaybackContoreller from "../Components/PlaybackContoreller";

import { Col, Row } from "reactstrap";

export default function MainPage() {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div className="parentParentContainer">
      <Row className="topParent">
        <Modal
          className="shadow"
          autoFocus={true}
          size="lg"
          isOpen={modal}
          toggle={toggle}
          style={{
            backgroundOpacity: 1.9,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <ModalHeader toggle={toggle}>Log in First </ModalHeader>
          <ModalBody
            style={
              {
                // width: "60vh",
                // height: "20vh",
                // padding: "7em",
              }
            }
          >
            <Form>
              <FormGroup className="m-2  p-2">
                <Input
                  valid={true}
                  bsSize="lg"
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="User Name "
                />
              </FormGroup>

              <FormGroup className="m-2 p-2">
                <Input
                  valid={false}
                  className="mt-4"
                  bsSize="lg"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password "
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button size="lg" outline color="danger" onClick={toggle}>
              Cancel
            </Button>
            <Button size="lg" outline color="success" onClick={toggle}>
              LogIn
            </Button>{" "}
          </ModalFooter>
        </Modal>
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
      <Row md={12} sm={12}>
        <PlaybackContoreller />
      </Row>
    </div>
  );
}

// const ModalExample = (props) => {

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>
//         {buttonLabel}
//       </Button>

//     </div>
//   );
// };

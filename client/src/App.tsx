import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { socket } from "./service/socket/socket";
const App = () => {
  const onLogout = () => {
    localStorage.removeItem("userName");
  };

  return (
    <Row justify="space-evenly" style={{ marginTop: 10 }}>
      <Col>
        <Button>
          <Link to="/room">Lobby</Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <Link to="/signin">SignIn</Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <Link to="/signup">SignUp</Link>
        </Button>
      </Col>
      <Col>
        <Button>
          <a href="https://admin.socket.io" target="_blank">
            Admin
          </a>
        </Button>
      </Col>
      <Col>
        <Button onClick={onLogout}>SignOut</Button>
      </Col>
    </Row>
  );
};

export default App;

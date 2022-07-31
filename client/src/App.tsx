import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

const App = () => {
  const onLogout=()=>{
    localStorage.removeItem("userName");
  }
  return (
    <Row
      style={{ display: "flex", fontSize: 26, justifyContent: "space-evenly" }}
    >
      <Col>
        <Link to="/room">Lobby</Link>
      </Col>
      <Col>
        <Link to="/signin">SignIn</Link>
      </Col>
      <Col>
        <Link to="/signup">SignUp</Link>
      </Col>
      <Col>
        <Button onClick={onLogout}>SignOut</Button>
      </Col>
    </Row>
  );
};

export default App;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Home() {
  let gameImg = require("../assets/images/game.png");
  let safeImg = require("../assets/images/safe.png");
  let submarineImg = require("../assets/images/submarine.png");

  return (
    <Row>
      <Col>
        <Image src={gameImg} alt="Game" rounded fluid />
      </Col>
      <Col>
        <Image src={safeImg} alt="Safe" rounded fluid />
      </Col>
      <Col>
        <Image src={submarineImg} alt="Submarine" rounded fluid />
      </Col>
    </Row>
  );
}
export default Home;

import { Container, Row, Col, Button, FormControl, InputGroup } from "react-bootstrap"

const MainInterface = ({ getResult, setText, history }) => {
  return <Container align="center">
    <Row style={{ margin: "20px 0 0 0" }}>
      <Col>
        <InputGroup>
          <FormControl onKeyUp={(e) => setText(e.target.value)} placeholder="Insert text" aria-label="Insert text" aria-describedby="basic-addon1" />
        </InputGroup>
      </Col>
      <Col>
        <Button onClick={() => getResult()}>Send</Button>
      </Col>
    </Row>
    <Row style={{ margin: "20px 0 0 0" }}>
      <Col>
        <b>Results:</b>
        {
          history && history.map(row =>
            <Row>
              <Col>{row.text}</Col>
              <Col>{row.palindrome ? "is" : "is not "} palindrome</Col>
            </Row>
          )
        }
      </Col>
    </Row>
  </Container>
}

export default MainInterface
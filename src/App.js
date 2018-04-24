import React, { Component } from 'react';
import './css/style.css';
import NavBar from './components/NavBar';
import { Row, Container, Col, Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
        <div className="guide-wrapper container-fluid">
        <Container>
          <Row>
            <Col>
            <Jumbotron className="text-center">
              <h1 className="">Your one-stop shop for everything gangplank.</h1>
              <p className="lead">Hand-crafted by the Gangplank mains community. Enjoy.</p>
              <hr className="my-2" />
              <p>Use our resources to become a pirate king.</p>
              <p className="lead">
                <Button outline color="success mr-3">Guide</Button>
                <Button outline color="danger mr-3">Media</Button>
                <Button outline color="primary mr-3">Reddit</Button>
                <Button outline color="secondary mr-3">Discussion</Button>
              </p>
            </Jumbotron>
            </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

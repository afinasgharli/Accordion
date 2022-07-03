import React from 'react';
import Heading from './component/Heading';
import './assets/css/app.css';
import {Container, Col , Row} from 'react-bootstrap';
import Accordion from './component/Accordion';


const App = ()=>{
  return (
      <Container>

        <Row className="d-flex justify-content-center">
          <Col lg={9}>
            <div className="App">
            <Heading title={"The Accordion with React Js"} subtitle={'The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.'} />
            <Accordion/>
            </div>
          </Col>
        </Row>

      </Container>


  )
}

export default App;
import React from 'react';
import { Container, Row, Col } from'reactstrap'

const Intro = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="6">
          <h1>Who?</h1>
          <p>Lorem ipsum dolor sit amet, massa risus ornare elit, felis sollicitudin semper tristique, ac magna felis massa justo, in porttitor mattis vivamus. Posuere ac viverra, est sed elementum risus mollis pretium lorem, justo justo felis tempor phasellus porttitor, rutrum justo dignissim molestie aenean. Nec porttitor nulla donec nunc et. Nunc id varius mus mattis, fermentum justo morbi, sed ligula orci pulvinar adipiscing facilisis velit. In ac congue, nec aliquam odio, consectetuer vel dolor eget praesent nullam montes, neque dolor nullam, iste elit vel a morbi facilisis.</p>
          </Col>

          <Col xs="6">
          <h1>Where?</h1>
          <p>Lorem ipsum dolor sit amet, massa risus ornare elit, felis sollicitudin semper tristique, ac magna felis massa justo, in porttitor mattis vivamus. Posuere ac viverra, est sed elementum risus mollis pretium lorem, justo justo felis tempor phasellus porttitor, rutrum justo dignissim molestie aenean. Nec porttitor nulla donec nunc et. Nunc id varius mus mattis, fermentum justo morbi, sed ligula orci pulvinar adipiscing facilisis velit. In ac congue, nec aliquam odio, consectetuer vel dolor eget praesent nullam montes, neque dolor nullam, iste elit vel a morbi facilisis.</p>
          </Col>
        </Row>
      </Container>
    </div>
  
  );
};

export default Intro;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer = () => {
 return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Sobre Nós</h3>
            <p>
              Somos uma empresa líder na área de Data Visualization e estamos sempre aprimorando nossos serviços.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Contato</h3>
            <p>Rua da Empresa, 123</p>
            <p>Cidade, Estado</p>
            <p>Email: contato@meuprojetodataviz.com</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Redes Sociais</h3>
            <Button variant="light" href="https://www.facebook.com">
              Facebook
            </Button>
            <Button variant="light" href="https://www.twitter.com">
              Twitter
            </Button>
            <Button variant="light" href="https://www.linkedin.com">
              LinkedIn
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
 );
};

export default Footer;



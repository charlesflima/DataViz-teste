import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const items = [
  {
    id: 1,
    title: 'Slide 1',
    description: 'Description for slide 1',
    imgSrc: '/Image/Slide1.jpg',
  },
  {
    id: 2,
    title: 'Slide 2',
    description: 'Description for slide 2',
    imgSrc: '/Image/slide2.jpg',
  },
  {
    id: 3,
    title: 'Slide 3',
    description: 'Description for slide 3',
    imgSrc: '/Image/slide3.jpg',
  },
];

const Content = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={items.length}
            currentSlide={currentSlide}
          >
            <Slider>
              {items.map((item) => (
                <Slide key={item.id} index={item.id - 1}>
                  <img
                    src={process.env.PUBLIC_URL + item.imgSrc}
                    alt={item.title}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </Slide>
              ))}
            </Slider>
            <ButtonBack className="slider-control" onClick={handlePrevSlide}>
              Back
            </ButtonBack>
            <ButtonNext className="slider-control" onClick={handleNextSlide}>
              Next
            </ButtonNext>
          </CarouselProvider>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/Image/Card1.jpg'} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card link</Card.Link>
              <Card.Link href="#">Another link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + '/Image/Card3.jpg'}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card link</Card.Link>
              <Card.Link href="#">Another link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;

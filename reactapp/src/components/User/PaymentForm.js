import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ThankYou from './ThankYou'; 

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOwner: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      submitted: false, 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { cardOwner, cardNumber, expirationDate, cvv, submitted } = this.state;

    if (submitted) {
      return <ThankYou />;
    }

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Payment Information</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="cardOwner">
                <Form.Label>Card Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  name="cardOwner"
                  value={cardOwner}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="expirationDate">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expirationDate"
                  value={expirationDate}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="password"
                  name="cvv"
                  value={cvv}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Confirm Payment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PaymentForm;

import React from 'react';
import { Container, Card, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles.css';

const products = [
  {
    id: 1,
    name: 'Wooden Frame',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 24.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const Homepage = () => {
  // Format currency in Rupees
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return formatter.format(amount);
  };

  return (
    <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
      <div style={{ margin: '20px' }}>
        <Nav defaultActiveKey="/Homepage" as="ul" className="justify-content-center" style={{ backgroundColor: 'green' }}>
          <div className="d-flex" style={{ fontWeight: 'bold' }}>
            <div className="nav-item mx-2">
              <Link to="/Myorder" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                My order
              </Link>
            </div>
            <div className="nav-item mx-2">
              <Link to="/Homepage" className="nav-link" style={{ color: 'white', fontSize: '30px' }}>
                Home
              </Link>
            </div>
            <div className="nav-item ml-auto">
              <Link to="/Logout" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                Logout
              </Link>
            </div>
          </div>
        </Nav>
      </div>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Welcome to Our Store</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
              <Card style={{ backgroundColor: 'lavender' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{formatCurrency(product.price)}</Card.Text>
                  <Link to={`/Myorder?giftModel=${encodeURIComponent(product.name)}&orderPrice=${encodeURIComponent(product.price)}`}>
                    <Button variant="primary">Order</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;

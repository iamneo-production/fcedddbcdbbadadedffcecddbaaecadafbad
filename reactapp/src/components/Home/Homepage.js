import { Container, Card, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Homepage = () => {
  const [products, setProducts] = useState([]);
  const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return formatter.format(amount);
  };

  const getGifts = () => {
    axios.get('http://localhost:8080/admin/gifts').then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }
  useEffect(() => {
    getGifts();
  }, []);
 

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
            <Col key={product.giftId+product.giftName} xs={12} md={4} lg={3} className="mb-4">
              <Card style={{ backgroundColor: 'lavender' }}>
                <Card.Img variant="top" src={product.giftImageUrl} />
                <Card.Body>
                  <Card.Title>{product.giftName}</Card.Title>
                  <Card.Text>{formatCurrency(product.giftPrice)}</Card.Text>
                  <Link to={`/Myorder?giftModel=${encodeURIComponent(product.giftName)}&orderPrice=${encodeURIComponent(product.giftPrice)}`}>
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

import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Form, Button, Card, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const themesData = [
  { id: 1, name: 'Theme 1', price: 5.99 },
  { id: 2, name: 'Theme 2', price: 7.99 },
  { id: 3, name: 'Theme 3', price: 9.99 },
  { id: 4, name: 'Theme 4', price: 6.99 },
];

const MyOrders = () => {
  const [selectedThemes, setSelectedThemes] = useState([]);
  const location = useLocation();
  const [giftModel, setGiftModel] = useState('');
  const [orderPrice, setOrderPrice] = useState('');
  const [themesData, setThemesData] = useState([]);
  const handleThemeCheckboxChange = (themeId) => {
    setSelectedThemes((prevSelectedThemes) => {
      if (prevSelectedThemes.includes(themeId)) {
        return prevSelectedThemes.filter((id) => id !== themeId);
      } else {
        return [...prevSelectedThemes, themeId];
      }
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramName = params.get('giftModel');
    const paramPrice = params.get('orderPrice');
    console.log(params,paramName,paramPrice);
    if (paramName && paramPrice) {
      setGiftModel(decodeURIComponent(paramName));
      setOrderPrice(decodeURIComponent(paramPrice));
    }
  }, [location]);

  axios
  .get('https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/theme')
  .then((response) => {
    setThemesData(response.data);
  })
  .catch((error) => {
    console.error('Error fetching themes:', error);
  });
}, [location]);

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
              <Link to="/Homepage" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                Home
              </Link>
            </div>
            <div className="nav-item mx-2">
              <Link to="/Myorder" className="nav-link" style={{ color: 'white', fontSize: '30px' }}>
                My order
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
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: 'lavender' }}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="orderDate">
                    <Form.Label>Order Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                  </Form.Group>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>
                  <Form.Group controlId="emailId">
                    <Form.Label>Email ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter email ID" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ backgroundColor: 'lavender' }}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="orderPrice">
                    <Form.Label>Order Price</Form.Label>
                    <Form.Control defaultValue={orderPrice} type="text" placeholder={formatCurrency(0.0)} readOnly />
                  </Form.Group>
                  <Form.Group controlId="giftModel">
                    <Form.Label>Gift Model</Form.Label>
                    <Form.Control defaultValue={giftModel} type="text" placeholder="Gift model" readOnly />
                  </Form.Group>
                  <Form.Group controlId="orderDescription">
                    <Form.Label>Order Description</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Order description" />
                  </Form.Group>
                  <Form.Group controlId="themeModel">
                    <Form.Label>Theme Models</Form.Label>
                    {themesData.map((theme) => (
                      <Form.Check
                        key={theme.id}
                        type="checkbox"
                        id={`theme-${theme.id}`}
                        label={`${theme.name} - ${formatCurrency(theme.price)}`}
                        checked={selectedThemes.includes(theme.id)}
                        onChange={() => handleThemeCheckboxChange(theme.id)}
                      />
                    ))}
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" className="mt-3">
          Place Order
        </Button>
      </Container>
    </div>
  );
};

export default MyOrders;

import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],  
      editingIndex: -1,  
      editedGiftName: '',  
      editedPrice: '', 
      editedQuantity: '',  
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addOrder = () => {
  };

  removeOrder = (index) => {
    const { orders } = this.state;
    orders.splice(index, 1);
    this.setState({ orders });
  };

  editOrder = (index) => {
    const { orders } = this.state;
    const { giftName, price, quantity } = orders[index];

    this.setState({
      editingIndex: index,
      editedGiftName: giftName,
      editedPrice: price.toString(),
      editedQuantity: quantity.toString(),
    });
  };

  saveOrder = (index) => {
    const { orders, editedGiftName, editedPrice, editedQuantity } = this.state;

    const updatedOrder = { ...orders[index], giftName: editedGiftName, price: parseFloat(editedPrice), quantity: parseInt(editedQuantity, 10) };
    const updatedOrders = [...orders];
    updatedOrders[index] = updatedOrder;

    this.setState({
      orders: updatedOrders,
      editingIndex: -1,  
      editedGiftName: '',
      editedPrice: '',
      editedQuantity: '',
    });
  };

  render() {
    const { orders, editingIndex, editedGiftName, editedPrice, editedQuantity } = this.state;

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
                <Link to="/Login" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                  Logout
                </Link>
              </div>
            </div>
          </Nav>
        </div>
        <Container>
          <Row>
            <Col md={12}>
              <h2 style={{ fontSize: '24px' }}></h2>
              <table className="table">
                <thead>
                  <tr style={{ backgroundColor: 'darkgreen' }}>
                    <th>Gift Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} style={{ backgroundColor: 'lightgreen' }}>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="editedGiftName"
                            value={editedGiftName}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          order.giftName
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="editedPrice"
                            value={editedPrice}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          order.price
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="editedQuantity"
                            value={editedQuantity}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          order.quantity
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <>
                            <Button variant="success" onClick={() => this.saveOrder(index)} style={{ marginRight: '10px' }}>
                              Save
                            </Button>
                            <Button variant="secondary" onClick={() => this.setState({ editingIndex: -1 })}>
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="warning" onClick={() => this.editOrder(index)} style={{ marginRight: '10px' }}>
                              Edit
                            </Button>
                            <Button variant="danger" onClick={() => this.removeOrder(index)}>
                              Remove
                            </Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
        <div className="text-center">
          <Button variant="primary">
            Pay
          </Button>
        </div>
      </div>
    );
  }
}

export default PlaceOrder;

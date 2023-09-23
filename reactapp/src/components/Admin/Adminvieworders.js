import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Adminvieworders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],  
      orderId: '',
      userId: '',
      giftName: '',
      price: '',
      quantity: '',
      editingIndex: -1, 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  removeOrder = (index) => {
    const { orders } = this.state;
    orders.splice(index, 1);
    this.setState({ orders });
  };

  editOrder = (index) => {
    const { orders } = this.state;
    this.setState({
      editingIndex: index,
      orderId: orders[index].orderId,
      userId: orders[index].userId,
      giftName: orders[index].giftName,
      price: orders[index].price.toString(),
      quantity: orders[index].quantity.toString(),
    });
  };

  saveOrder = (index) => {
    const { orders, orderId, userId, giftName, price, quantity } = this.state;

    const updatedOrder = {
      orderId,
      userId,
      giftName,
      price: parseFloat(price),  
      quantity: parseInt(quantity, 10),  
    };

    const updatedOrders = [...orders];
    updatedOrders[index] = updatedOrder;

    this.setState({
      orders: updatedOrders,
      editingIndex: -1,  
      orderId: '',
      userId: '',
      giftName: '',
      price: '',
      quantity: '',
    });
  };

  render() {
    const { orders, orderId, userId, giftName, price, quantity, editingIndex } = this.state;

    return (
      <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
        <div style={{ margin: '20px' }}>
          <Nav defaultActiveKey="/Homepage" as="ul" className="justify-content-center" style={{ backgroundColor: 'green' }}>
            <div className="d-flex" style={{ fontWeight: 'bold' }}>
              <div className="nav-item mx-2">
                <Link to="/AdminGifts" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                  Gifts
                </Link>
              </div>
              <div className="nav-item mx-2">
                <Link to="/Adminvieworders" className="nav-link" style={{ color: 'white', fontSize: '30px' }}>
                  Orders
                </Link>
              </div>
              <div className="nav-item ml-auto">
                <Link to="/AdminThemes" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                  Themes
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
                    <th>Order ID</th>
                    <th>User ID</th>
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
                            name="orderId"
                            value={orderId}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          order.orderId
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}
                          />
                        ) : (
                          order.userId
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="giftName"
                            value={giftName}
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
                            name="price"
                            value={price}
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
                            name="quantity"
                            value={quantity}
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
      </div>
    );
  }
}

export default Adminvieworders;

import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line

class AdminGifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [], 
      giftName: '',
      quantity: '',
      giftDetails: '',
      giftPrice: '', 
      giftImageUrl: '', 
      editingIndex: -1, 
    };
  }
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  getGifts = () => {
    axios.get('https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/gift').then((response) => {
      this.setState({ gifts: response.data });
      console.log(response.data);
    });
  }
  
  componentDidMount() {
    this.getGifts();
    console.log("Did mount called", this.state.gifts);
     }
 
  addGift = () => {
    const { giftName, quantity, giftDetails, giftPrice, giftImageUrl, gifts, editingIndex } = this.state;

    if (editingIndex !== -1) {
      const updatedGifts = [...gifts];
      updatedGifts[editingIndex] = {
        giftName,
        quantity: parseInt(quantity, 10),
        giftDetails,
        giftPrice: parseFloat(giftPrice), 
        giftImageUrl, 
      };

      this.setState({
        gifts: updatedGifts,
        editingIndex: -1, 
        giftName: '',
        quantity: '',
        giftDetails: '',
        giftPrice: '', 
        giftImageUrl: '', 
      });
    } else {
      const newGift = {
        giftName,
        quantity: parseInt(quantity, 10),
        giftDetails,
        giftPrice: parseFloat(giftPrice), 
        giftImageUrl, 
      };
      this.setState({
        gifts: [...gifts, newGift],
        giftName: '',
        quantity: '',
        giftDetails: '',
        giftPrice: '', 
        giftImageUrl: '', 
      });
    }
   this.handleAddGift();
  };

  handleAddGift = async () => {
    const { giftName, giftPrice, giftImageUrl, quantity, giftDetails } = this.state;
      const response = await axios.post(
        'https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/addGift', {
        giftName,
        giftPrice,
        giftImageUrl,
        quantity,
        giftDetails,
      });
      console.log('Gift added:', response.data);
      
      this.setState({
        giftName: '',
        giftPrice: 0,
        giftImageUrl: '',
        quantity: 0,
        giftDetails: '',
      });
  };
  
    handleEditGift = async () => {
      const { giftName, giftPrice, giftImageUrl, quantity, giftDetails, editingIndex, gifts} = this.state;
      const editedGift = {
        giftName,
        giftPrice,
        giftImageUrl,
        quantity,
        giftDetails,
      };

      const response = await axios.put(
        `https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/editGift/${giftName}`, // You may need to adjust the URL structure based on your server's API
        editedGift
      );

      console.log('Gift edited:', response.data);

      const updatedGifts = [...gifts];
      updatedGifts[editingIndex] = editedGift;

      this.setState({
        gifts: updatedGifts,
        editingIndex: -1,
        giftName: '',
        giftPrice: '',
        giftImageUrl: '',
        quantity: '',
        giftDetails: '',
      });
    };

    handleDeleteGift = async (index) => {
      const { editingIndex, gifts } = this.state;
      
      if (editingIndex === index) {
        this.setState({ editingIndex: -1 });
        return;
      }

      const giftName = gifts[index].giftName; // Replace 'id' with the actual property name that holds the gift's ID

      try {
        const response = await axios.delete(
          `https://8080-fcedddbcdbbadadedffcecddbaaecadafbad.premiumproject.examly.io/admin/deleteGift/${giftName}` // Adjust the URL structure based on your server's API
        );

        console.log('Gift deleted:', response.data);

        const updatedGifts = [...gifts];
        updatedGifts.splice(index, 1);

        this.setState({
          gifts: updatedGifts,
          editingIndex: -1,
        });
      } catch (error) {
        console.error('Error deleting gift:', error);
      }
    };

  removeGift = (index) => {
    const { gifts } = this.state;
    gifts.splice(index, 1);
    this.setState({ gifts });
  };

  editGift = (index) => {
    const { gifts } = this.state;
    this.setState({
      editingIndex: index,
      giftName: gifts[index].giftName,
      giftPrice: gifts[index].giftPrice,
      quantity: gifts[index].quantity,
      giftDetails: gifts[index].giftDetails,
      giftImageUrl: gifts[index].giftUrl,
    });
  };

  saveGift = (index) => {
    const { gifts, giftName, quantity, giftPrice, giftDetails, giftImageUrl } = this.state;

    const updatedGift = {
      giftName,
      quantity: parseInt(quantity, 10),
      giftPrice: parseFloat(giftPrice),
      giftDetails,
      giftImageUrl, 
    };

    const updatedGifts = [...gifts];
    updatedGifts[index] = updatedGift;

    this.setState({
      gifts: updatedGifts,
      editingIndex: -1, 
      giftName: '',
      quantity: '',
      giftDetails: '',
      giftPrice: '', 
      giftImageUrl: '', 
    });
  };

  render() {
    const { gifts, giftName, quantity, giftDetails, giftPrice, giftImageUrl, editingIndex } = this.state;
  
    return (
      <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
        <div style={{ margin: '20px' }}>
          <Nav defaultActiveKey="/Homepage" as="ul" className="justify-content-center" style={{ backgroundColor: 'green' }}>
            <div className="d-flex" style={{ fontWeight: 'bold' }}>
              <div className="nav-item mx-2">
                <Link to="/AdminThemes" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                  Themes
                </Link>
              </div>
              <div className="nav-item mx-2">
                <Link to="/AdminGifts" className="nav-link" style={{ color: 'white', fontSize: '30px' }}>
                  Gifts
                </Link>
              </div>
              <div className="nav-item ml-auto">
                <Link to="/Adminvieworders" className="nav-link" style={{ color: 'white', fontSize: '20px' }}>
                  Orders
                </Link>
              </div>
            </div>
          </Nav>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={{ fontSize: '24px'}}>Gifts</h2>
              <table className="table">
                <thead>
                  <tr style={{ backgroundColor: 'darkgreen' }}>
                    <th>Gift Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Gift Details</th>
                    <th>Image</th>
                    <th>        </th>
                  </tr>
                </thead>
                <tbody>
                  {gifts.map((gift, index) => (
                    <tr key={index} style={{ backgroundColor: 'lightgreen'}}>
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
                          gift.giftName
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="giftPrice"
                            value={giftPrice}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}  
                          />
                        ) : (
                          gift.giftPrice
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
                          gift.quantity
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="giftDetails"
                            value={giftDetails}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}  
                          />
                        ) : (
                          gift.giftDetails
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="giftImageUrl"
                            value={giftImageUrl}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }}  
                          />
                        ) : (
                          <img src={gift.giftImageUrl} alt="Gift" style={{ width: '50px', height: '50px' }} />
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <>
                            <Button variant="success" onClick={() => this.handleEditGift(index)} style={{ marginRight: '10px' }}>
                              Save
                            </Button>
                            <Button variant="secondary" onClick={() => this.setState({ editingIndex: -1 })}>
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="warning" onClick={() => this.editGift(index)} style={{ marginRight: '10px' }}>
                              Edit
                            </Button>
                            <Button variant="danger" onClick={() => this.handleDeleteGift(index)}>
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
            <Col md={6} className="add-gifts-section">
              <h2 style={{ fontSize: '24px', marginLeft: '80px' }}>{editingIndex === -1 ? 'Add Gift' : 'Edit Gift'}</h2>
              <Form>
                <Form.Group controlId="giftName">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Gift Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="giftName"
                    value={giftName}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="giftPrice">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="giftPrice"
                    value={giftPrice}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="quantity">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Product Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    value={quantity}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="giftDetails">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Gift Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="giftDetails"
                    value={giftDetails}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="giftImageUrl">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Gift URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="giftImageUrl"
                    value={giftImageUrl}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                {editingIndex === -1 ? (
                  <Button variant="primary" style={{ marginTop: '20px', marginLeft: '80px' }} onClick={this.addGift}>
                    Add Gift
                  </Button>
                ) : null}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminGifts;

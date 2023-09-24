import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AdminThemes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [], // You should manage your theme data here
      themeName: '',
      themeDetails: '',
      themePrice: '', // Add the themePrice field
      editingIndex: -1, // Track the index of the theme being edited, -1 means no theme is being edited
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addTheme = async () => {
    const { themeName, themeDetails, themePrice, themes, editingIndex } = this.state;

    if (editingIndex !== -1) {
      const updatedThemes = [...themes];
      updatedThemes[editingIndex] = {
        themeName,
        themeDetails,
        themePrice: parseFloat(themePrice), // Parse the themePrice as a float
      };

      this.setState({
        themes: updatedThemes,
        editingIndex: -1, // Stop editing
        themeName: '',
        themeDetails: '',
        themePrice: '', // Reset the themePrice field
      });
    } else {
      // If not editing, add a new theme
      const newTheme = {
        themeName,
        themeDetails,
        themePrice: parseFloat(themePrice), // Parse the themePrice as a float
      };
      this.setState({
        themes: [...themes, newTheme],
        themeName: '',
        themeDetails: '',
        themePrice: '', // Reset the themePrice field
      });
    }
    this.handleAddTheme(); 
  };

  handleAddTheme = async () => {
    const { themeName, themePrice, themeDetails } = this.state;
    const response = await axios.post(
      'http://localhost:8080/admin/addTheme', {
      themeName,
      themePrice,
      themeDetails,
    });
    console.log('Theme added:', response.data);
    
    this.setState({
      themeName: '',
      themePrice: 0,
      themeDetails: '',
    });
  };
  
  handleEditTheme = async (themeId) => {
    const { themeName, themePrice, themeDetails, editingIndex, themes } = this.state;
    const editedTheme = {
      themeName,
      themePrice,
      themeDetails,
    };

      const response = await axios.put(
        `http://localhost:8080/admin/editTheme/${themeId}`, // Adjust the URL structure based on your server's API
        editedTheme
      );
  
      console.log('Theme edited:', response.data);
  
      const updatedThemes = [...themes];
      updatedThemes[editingIndex] = editedTheme;
  
      this.setState({
        themes: updatedThemes,
        editingIndex: -1,
        themeName: '',
        themePrice: '',
        themeDetails: '',
      });
    };

  handleDeleteTheme = async (index) => {
    const { editingIndex, themes } = this.state;
    
    if (editingIndex === index) {
      this.setState({ editingIndex: -1 });
      return;
    }
  
    const themeId = themes[index].themeId; // Replace 'themeId' with the actual property name that holds the theme's ID
  
    try {
      const response = await axios.delete(
        `http://localhost:8080/admin/deleteTheme/${themeId}`, // Adjust the URL structure based on your server's API
      );
  
      console.log('Theme deleted:', response.data);
  
      const updatedThemes = [...themes];
      updatedThemes.splice(index, 1);
  
      this.setState({
        themes: updatedThemes,
        editingIndex: -1,
      });
    } catch (error) {
      console.error('Error deleting theme:', error);
    }
  };
  

  removeTheme = (index) => {
    const { themes } = this.state;
    themes.splice(index, 1);
    this.setState({ themes });
  };

  editTheme = (index) => {
    const { themes } = this.state;
    this.setState({
      editingIndex: index,
      themeName: themes[index].themeName,
      themePrice: themes[index].themePrice,
      themeDetails: themes[index].themeDetails,
    });
  };

  saveTheme = (index) => {
    const { themes, themeName, themePrice, themeDetails } = this.state;

    const updatedTheme = {
      themeName,
      themePrice: parseFloat(themePrice),
      themeDetails,
    };

    const updatedThemes = [...themes];
    updatedThemes[index] = updatedTheme;

    this.setState({
      themes: updatedThemes,
      editingIndex: -1, // Stop editing
      themeName: '',
      themeDetails: '',
      themePrice: '', // Reset the themePrice field
    });
  };

  render() {
    const { themes, themeName, themeDetails, themePrice, editingIndex } = this.state;
  
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
                <Link to="/AdminThemes" className="nav-link" style={{ color: 'white', fontSize: '30px' }}>
                  Themes
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
              <h2 style={{ fontSize: '24px'}}>Themes</h2>
              <table className="table">
                <thead>
                  <tr style={{ backgroundColor: 'darkgreen' }}>
                    <th>Theme Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>        </th>
                  </tr>
                </thead>
                <tbody>
                  {themes.map((theme, index) => (
                    <tr key={index} style={{ backgroundColor: 'lightgreen'}}>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="themeName"
                            value={themeName}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }} // Set a fixed width for the input field
                          />
                        ) : (
                          theme.themeName
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="themePrice"
                            value={themePrice}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }} // Set a fixed width for the input field
                          />
                        ) : (
                          theme.themePrice
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <input
                            type="text"
                            name="themeDetails"
                            value={themeDetails}
                            onChange={(e) => this.handleInputChange(e)}
                            style={{ width: '100px' }} // Set a fixed width for the input field
                          />
                        ) : (
                          theme.themeDetails
                        )}
                      </td>
                      <td>
                        {editingIndex === index ? (
                          <>
                            <Button variant="success" onClick={() => this.saveTheme(index)} style={{ marginRight: '10px' }}>
                              Save
                            </Button>
                            <Button variant="secondary" onClick={() => this.setState({ editingIndex: -1 })}>
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="warning" onClick={() => this.editTheme(index)} style={{ marginRight: '10px' }}>
                              Edit
                            </Button>
                            <Button variant="danger" onClick={() => this.removeTheme(index)}>
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
              <h2 style={{ fontSize: '24px', marginLeft: '80px' }}>{editingIndex === -1 ? 'Add Theme' : 'Edit Theme'}</h2>
              <Form>
                <Form.Group controlId="themeName">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Theme Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="themeName"
                    value={themeName}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="themePrice">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="themePrice"
                    value={themePrice}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                <Form.Group controlId="themeDetails">
                  <Form.Label style={{ fontSize: '16px', marginLeft: '80px' }}>Enter Theme Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="themeDetails"
                    value={themeDetails}
                    onChange={this.handleInputChange}
                    style={{ backgroundColor: 'lightblue', color: 'black', marginLeft: '80px' }}
                  />
                </Form.Group>
                {editingIndex === -1 ? (
                  <Button variant="primary" style={{ marginTop: '20px', marginLeft: '80px' }} onClick={this.addTheme}>
                    Add Theme
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

export default AdminThemes;

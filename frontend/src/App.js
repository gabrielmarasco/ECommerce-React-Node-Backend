import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className="d-flex flex-column site-container">
      <header className="App-header">
        <Navbar bg="dark" variant="darl">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <span className="span-logo">CONCESIONARIA</span>
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link text-light">
                Cart
                {cart.cartItems.lenght > 0 && (
                  <Badge pill variant="danger">
                    {cart.cartItems.length}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">
          <h2>PROYECTO INTEGRADOR EN REACT + BACKEND EN NODE</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;

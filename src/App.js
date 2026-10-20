
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Description, Image, Name, Price } from './components';
import './App.css';

const firstName = 'Yasmine';

function App() {
  return (
    <Container className="app-shell">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={8} lg={6}>
          <Card className="product-card border-0 shadow-lg">
            <Card.Body className="p-0">
              <Image />
              <div className="product-content">
                <Name />
                <Price />
                <Description />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="greeting-panel text-center">
        <h2>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</h2>
        {firstName && (
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
            alt="profile"
            className="profile-image"
          />
        )}
      </div>
    </Container>
  );
}

export default App;

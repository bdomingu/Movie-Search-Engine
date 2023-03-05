import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import movieLogo from '../img/moviedb.png'

function Navigation({input, setInput}) {
  return (
    <Navbar style={{ backgroundColor: 'rgb(0, 77, 50)' }} variant="dark">
    <Container fluid>
      <Navbar.Brand className='navbar-heading' href="#">MovieSearch
       <img alt='movie logo' className='movie-logo' src={movieLogo}/>
       </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search movies..."
            className="me-2"
            aria-label="Search"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaFacebookMessenger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserImg from '../assets/usuario.png';
import '../Styles/Navbar.css';

function NavbarSocial({ onChatClick }) {
  return (
    <Navbar className="NavBarSocial" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2 text-white py-2" id='title-navbar'>
          SocialMediaSena
        </Navbar.Brand>

        <div className="search-container">
          <input className="Search" type="text" placeholder="Buscador" />
        </div>

        <Navbar.Toggle aria-controls="navbar-social" />
        <Navbar.Collapse id="navbar-social">
          <Nav className="ms-auto d-flex align-items-center gap-3 navbar-links">

            <Link to="/publicaciones" className="navbar-link">
              Home
            </Link>
            <Link to="/" className="navbar-link">
              Publicaciones
            </Link>
            <Link to="/empleos" className="navbar-link">
              Empleo
            </Link>

            <Dropdown align="end">
              <Dropdown.Toggle
                as="span"
                style={{ cursor: 'pointer', display: 'inline-block', border: 'none', background: 'none', padding: 0 }}
                id='dropdown-user'
              >
                <img
                  src={UserImg}
                  alt="Usuario"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown drop="end">
                  <Dropdown.Toggle as="div" className="dropdown-item" style={{ cursor: 'pointer' }}>
                    Mi Perfil
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/perfil">
                      Ver Perfil
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item as={Link} to="/configuracion">
                  Configuración
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/certificados">
                  Certificaciones
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/empleos">
                  Mis Empleos
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/gamificacion">
                  Retos y Logros
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/eventos">
                  Inscripción Eventos
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/empresas">
                  Empresas
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/ayuda">
                  Ayuda
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">
                  Cerrar Sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div
              onClick={onChatClick}
              style={{ cursor: 'pointer', color: 'white', fontSize: '22px' }}
              title="Chat"
            >
              <FaFacebookMessenger />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSocial;
import { Card, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import UserImg from '../assets/usuario.png'; // Asegúrate de que la ruta sea correcta

function Publicar() {
  const [contenido, setContenido] = useState('');

  const manejarPublicacion = () => {
    if (contenido.trim() !== '') {
      alert(`Publicación enviada: ${contenido}`);
      setContenido('');
    }
  };

  return (
    <Card className="my-3 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
      <Card.Body>
        <div className="d-flex align-items-start gap-2 mb-2">
          <img
            src={UserImg}
            alt="Usuario"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginTop: '2px'
            }}
          />
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="¿Qué estás pensando?"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            style={{
              resize: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem',
              height: '60px',
            }}
          />
        </div>
        <div className="text-end">
          <Button
            variant="success"
            size="sm"
            onClick={manejarPublicacion}
            disabled={!contenido.trim()}
          >
            Publicar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Publicar;
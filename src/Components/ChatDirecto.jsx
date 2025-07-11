import { useState, useRef, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import '../Styles/ChatDirecto.css';

function ChatDirecto({ onClose }) {
  const [mensajes, setMensajes] = useState([
    { id: 1, texto: '¡Hola! ¿Cómo estás?', sender: 'otro' },
    { id: 2, texto: '¡Hola! Todo bien, ¿y tú?', sender: 'yo' }
  ]);
  const [mensajeActual, setMensajeActual] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [mensajes]);

  const enviarMensaje = () => {
    if (mensajeActual.trim() === '') return;
    setMensajes([...mensajes, { id: Date.now(), texto: mensajeActual, sender: 'yo' }]);
    setMensajeActual('');
  };

  const manejarEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  const chat = (
    <Card className="chat-flotante">
      <Card.Header className="chat-header d-flex justify-content-between align-items-center">
        <span>Chat Directo</span>
        <button
          onClick={onClose}
          aria-label="Cerrar chat"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white',
            lineHeight: '1',
          }}
        >
          ✖
        </button>
      </Card.Header>

      <Card.Body className="chat-body" ref={chatBodyRef}>
        <ul className="chat-message-list">
          {mensajes.map((msg) => (
            <li key={msg.id} className={`chat-message chat-message--${msg.sender}`}>
              <div className={`chat-bubble chat-bubble--${msg.sender}`}>
                {msg.texto}
              </div>
            </li>
          ))}
        </ul>
      </Card.Body>

      <Card.Footer className="chat-footer">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Escribe un mensaje..."
          value={mensajeActual}
          onChange={(e) => setMensajeActual(e.target.value)}
          onKeyDown={manejarEnter}
          className="chat-textarea"
        />
        <div className="d-flex justify-content-end mt-2">
          <Button onClick={enviarMensaje} variant="success">
            Enviar
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );

  return createPortal(chat, document.body);
}

export default ChatDirecto;

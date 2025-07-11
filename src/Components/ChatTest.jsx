import { useState } from 'react';
import { createPortal } from 'react-dom';

function ChatTest() {
  const [abierto, setAbierto] = useState(false);

  const chat = (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#198754',
      color: 'white',
      padding: '1rem',
      borderRadius: '12px',
      zIndex: 1000,
      width: '300px'
    }}>
      <strong>Chat</strong>
      <p>Hola desde el chat</p>
      <button onClick={() => setAbierto(false)}>Cerrar</button>
    </div>
  );

  return (
    <>

    </>
  );
}

export default ChatTest;

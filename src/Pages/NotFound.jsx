
function NotFound(){
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Página no encontrada</h1>
            <p style={{ textAlign: 'center' }}>Lo sentimos, la página que buscas no existe.</p>
            <p style={{ textAlign: 'center' }}>Por favor, verifica la URL o regresa a la página principal.</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>Volver al inicio</a>
            </div>
        </div>
    )
}

export default NotFound;
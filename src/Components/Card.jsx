import '../Styles/Card.css';

function Card({ imagen, titulo, descripcion }) {
    return(
        <div className="simple-card">
            <img src={imagen} alt={titulo} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{titulo}</h3>
                <p className="card-description">{descripcion}</p>
            </div>
        </div>
    )
}

export default Card;
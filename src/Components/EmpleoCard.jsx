import '../Styles/Empleo.css';

const EmpleoCard = ({ titulo, empresa, ubicacion, tipo, descripcion, fecha }) => (
  <div className="empleo-card">
    <h2 className="empleo-card-title">{titulo}</h2>
    <span className="empleo-card-empresa">{empresa}</span>
    <span className="empleo-card-info">{ubicacion} • {tipo}</span>
    <p className="empleo-card-desc">{descripcion}</p>
    <span className="empleo-card-fecha">{fecha}</span>
    <button className="empleo-btn">Ver más</button>
  </div>
);

export default EmpleoCard;
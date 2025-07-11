import { FaCertificate } from 'react-icons/fa';
import '../Styles/Certificados.css';

const CertificadoCard = ({ nombre, descripcion, fecha }) => (
  <div className="certificado-card alt-style">
    <div className="certificado-icon">
      <FaCertificate size={36} color="#f7b731" />
    </div>
    <div className="certificado-content">
      <h2 className="certificado-card-title">{nombre}</h2>
      <p className="certificado-card-desc">{descripcion}</p>
      <span className="certificado-card-fecha">{fecha}</span>
      <button className="certificado-btn">Solicitar</button>
    </div>
  </div>
);

export default CertificadoCard;
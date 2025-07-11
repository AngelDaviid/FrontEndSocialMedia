import CertificadoCard from '../Components/CertificadoCard';
import '../Styles/Certificados.css';

const certificados = [
  {
    nombre: "Certificado de Estudios",
    descripcion: "Documento oficial que acredita tu formación en el SENA.",
    fecha: "Disponible desde 2023"
  },
  {
    nombre: "Certificado de Participación",
    descripcion: "Reconocimiento por asistir a eventos y talleres.",
    fecha: "Disponible desde 2024"
  }
];

function Certificados() {
  return (
    <div className="certificados-bg">
      <h1 className="certificados-title">Certificados</h1>
      <div className="certificados-list">
        {certificados.map((cert, idx) => (
          <CertificadoCard key={idx} {...cert} />
        ))}
      </div>
    </div>
  );
}

export default Certificados;
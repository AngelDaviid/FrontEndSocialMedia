import '../Styles/Empleo.css'; 
import EmpleoCard from '../Components/EmpleoCard';

const empleos = [
  {
    titulo: "Desarrollador Frontend",
    empresa: "Tech Solutions S.A.S.",
    ubicacion: "Bogotá, Colombia",
    tipo: "Contrato de aprendizaje",
    descripcion: "Únete a nuestro equipo para crear interfaces modernas con React.",
    fecha: "Publicado hace 2 días"
  },
  {
    titulo: "Analista de Datos",
    empresa: "DataCorp",
    ubicacion: "Medellín, Colombia",
    tipo: "Contrato laboral",
    descripcion: "Buscamos un analista para interpretar grandes volúmenes de datos.",
    fecha: "Publicado hace 1 día"
  },
  {
    titulo: "Diseñador UI/UX",
    empresa: "Creativa Studio",
    ubicacion: "Remoto",
    tipo: "Patrocinio",
    descripcion: "Colabora en proyectos innovadores de diseño digital.",
    fecha: "Publicado hoy"
  }
];

function Empleo() {
  return (
    <div className="empleo-bg">
      <h1 className="empleo-title">Empleos Disponibles</h1>
      <div className="empleo-list">
        {empleos.map((empleo, idx) => (
          <EmpleoCard key={idx} {...empleo} />
        ))}
      </div>
    </div>
  );
}

export default Empleo;
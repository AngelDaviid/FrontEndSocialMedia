import Card from '../Components/Card';
import SenaImg from '../assets/Sena.jpg';
import OfertaImg from '../assets/ofertaSena.jpg';

function Publicaciones() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
        <Card
          titulo='Evento SENA'
          imagen={SenaImg}
          descripcion='¡Celebremos juntos el Día de la Afrocolombianidad!
            En el SENA Caldas conmemoramos esta fecha especial abriendo más de 60 oportunidades laborales a través de nuestra Agencia Pública de Empleo. 💼✨'
        />

        <Card
          titulo='Oferta educativa'
          imagen={OfertaImg}
          descripcion='📢Atención Caldas📢 El Servicio Nacional de Aprendizaje, SENA, alista su tercera oferta educativa del año y usted puede ser uno de los beneficiarios. 🗣Esta vez, la regional Caldas✨ contará con 1.080✅ cupos distribuidos en programas de formación ✔tecnológica, ✔técnica, ✔operaria y ✔auxiliar, todos diseñados para responder a las necesidades del sector productivo y abrirle las puertas al mundo laboral.'
        />
      </div>
    </div>
  );
}

export default Publicaciones;
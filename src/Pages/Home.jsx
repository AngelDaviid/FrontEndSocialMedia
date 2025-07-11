import Publicar from '../Components/Publicar';
import Publicaciones from './Publicaciones';
import '../Styles/Home.css';

function Home() {
  return (
    <>
      <main>
        <Publicar />
        <div className="container-card">
          <Publicaciones />
        </div>
      </main>
    </>
  );
}

export default Home;

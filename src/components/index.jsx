import '../styles/peta.css';
import Leaflet from '../pages/content/leaflet';
import Keterangan from '../pages/content/keterangan';

const Peta = () => {
  return (
    <div>
      <h2>SALOMALLORI</h2>
      <div className="peta">
        <Leaflet />
        <Keterangan />
      </div>
    </div>
  );
};

export default Peta;

import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import BatasWilayah from '../../assets/wilayah/bataswilayah';
import React from 'react';
import AddButtonToMap from '../../components/tombol/batasWilayah';

const Leaflet = () => {
  const DisableDragging = () => {
    const map = useMap();

    React.useEffect(() => {
      map.dragging.disable();
    }, [map]);

    return null;
  };

  // Marker
  const [showMarker, setShowMarker] = React.useState(false);
  const handleToggleMarker = () => {
    setShowMarker((prev) => !prev);
  };
  return (
    <>
      <div className="leaflet-container">
        <MapContainer
          center={[-3.909014, 119.982326]}
          zoom={window.matchMedia('(max-width: 600px)').matches ? 13 : 15}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showMarker && <BatasWilayah />}

          <DisableDragging />
          <AddButtonToMap
            onClick={handleToggleMarker}
            isMarkerVisible={showMarker}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default Leaflet;

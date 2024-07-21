import { useMap } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import PropTypes from 'prop-types';

const AddButtonToMap = ({ onClick, isMarkerVisible }) => {
  const map = useMap();

  React.useEffect(() => {
    const button = L.control({ position: 'topleft' });

    button.onAdd = () => {
      const div = L.DomUtil.create(
        'div',
        'leaflet-bar leaflet-control leaflet-control-custom'
      );
      const buttonElement = document.createElement('button');
      buttonElement.innerText = 'Batas Wilayah';
      buttonElement.style.backgroundColor = isMarkerVisible
        ? '#6d4838'
        : 'black';
      buttonElement.style.color = 'white';
      buttonElement.style.border = 'none';
      buttonElement.style.padding = '5px';
      buttonElement.style.cursor = 'pointer';

      buttonElement.onclick = onClick;

      div.appendChild(buttonElement);
      return div;
    };

    button.addTo(map);

    return () => {
      map.removeControl(button);
    };
  }, [map, onClick, isMarkerVisible]);

  return null;
};

AddButtonToMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMarkerVisible: PropTypes.bool.isRequired,
};

export default AddButtonToMap;

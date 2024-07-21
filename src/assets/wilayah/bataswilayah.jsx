import { Polyline } from 'react-leaflet';

const BatasWilayah = () => {
  const linePositions = [
    [-3.901657, 119.996232],
    [-3.894706, 119.981039],
    [-3.883243, 119.975334],
    [-3.885946, 119.973853],
    [-3.88804, 119.975552],
    [-3.908972, 119.974112],
    [-3.9105, 119.96936],
    [-3.923154, 119.968182],
    [-3.929108, 119.965394],
    [-3.930871, 119.967593],
    [-3.916098, 119.990798],
    [-3.906527, 119.999377],
    [-3.901657, 119.996232],
  ];
  const lineSegments = linePositions.map((point, index) => {
    const nextPoint = linePositions[(index + 1) % linePositions.length];
    return [point, nextPoint];
  });
  return lineSegments.map(([start, end], index) => (
    <Polyline
      key={index}
      positions={[start, end]}
      color="#6d4838"
      weight={3}
      dashArray="5 5"
    />
  ));
};

export default BatasWilayah;

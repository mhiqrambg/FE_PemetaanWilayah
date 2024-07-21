import logo from '../../assets/img/logo.png';

const Keterangan = () => {
  return (
    <div className="petaket">
      <div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <img height="100px" width="100px" src={logo} alt="Logo" />
        </div>
        <h2 style={{ textAlign: 'center', color: 'black' }}>
          KEL. SALOMALLORI
          <br />
          KEC. DUA PITUE
          <br />
          KAB. SIDENRENG RAPPANG
        </h2>
      </div>
      <div>
        <h3>KETERANGAN</h3>
        <ul className="li">
          <li>KANDANG SAPI</li>
          <li>KANDANG AYAM</li>
          <li>SAWAH</li>
          <li>EMPANG</li>
        </ul>
      </div>
    </div>
  );
};

export default Keterangan;

const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '0 auto', fontSize: '4rem', color: '#003366' }}>
        YAMRUN¡ <i className="bi bi-airplane-engines"></i>
      </h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <i data-feather="home"></i><a className="navbar-brand" href="#">INICIO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i data-feather="dollar-sign"></i> PRECIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i data-feather="help-circle"></i>CONSULTAS FRECUENTES</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i data-feather="send"></i>
                  MODELOS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">PISTERAS</a></li>
                  <li><a className="dropdown-item" href="#">DEPORTIVAS</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">SUPER BIKES</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">YAMRUN¡</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Consulta tu Modelo" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

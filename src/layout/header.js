import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#406B8C' }}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{ color: '#FFA500' }}>
            <i data-feather="globe"></i>YAMRUN!
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#FFFFFF' }}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: '#FFFFFF' }}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#FFFFFF' }}>
                  Tipos de Motos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" style={{ color: '#333333' }}>Action</a>Pisteras</li>
                  <li><a className="dropdown-item" href="#" style={{ color: '#333333' }}>Another action</a>Deportivas</li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#" style={{ color: '#333333' }}>Something else here</a>Clásicas</li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Acelera tus emociones..." aria-label="Search" style={{ borderColor: '#E0E0E0' }} />
              <button className="btn" type="submit" style={{ backgroundColor: '#FFA500', color: '#FFFFFF', borderColor: '#FFA500' }}>Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

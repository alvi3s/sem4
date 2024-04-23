import React from 'react';
import { Button } from 'react-bootstrap';

const Aside = () => {
  return (
    <div>
      <h6 style={{ color: 'skyblue', fontWeight: 'bold', fontSize: '25px' }}>Datos Personales</h6>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Nombres</label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="inputLastName" />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">GMAIL</label>
          <input type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Domicilio 1</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Domicilio 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Acepto Términos y Condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          <Button variant="primary" type="submit">Iniciar Sesión</Button>
        </div>
      </form>
    </div>
  );
}

export default Aside;

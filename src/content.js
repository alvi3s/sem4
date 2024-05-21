import React from 'react';
import Button from 'react-bootstrap/Button';

const feather = require('feather-icons');
setTimeout(() => {
  feather.replace();
}, 1000);

const Content = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-2"></div> {}
                <div className="col-md-8">
                    <form className="mb-3">
                        <div className="mb-3 custom-bg-color"> {/* Clase custom-bg-color para cambiar el color */}
                            <label htmlFor="validationDefault01" className="form-label">
                                <i data-feather="user"></i> Nombre Completo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault01"
                                value="Yamir Mijail"
                                required
                            />
                        </div>

                        <div className="mb-3 custom-bg-color"> {/* Clase custom-bg-color para cambiar el color */}
                            <label htmlFor="validationDefault02" className="form-label">
                                <i data-feather="user"></i> Apellidos Completos
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault02"
                                value="Vargas Alvitres"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationDefaultUsername" className="form-label">
                                <i data-feather="at-sign"></i> Usuario
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationDefaultUsername"
                                    aria-describedby="inputGroupPrepend2"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationDefault03" className="form-label">
                                <i data-feather="map"></i> Ciudad
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationDefault04" className="form-label">
                                <i data-feather="map-pin"></i> Estado
                            </label>
                            <select className="form-select" id="validationDefault04" required>
                                <option selected disabled value="">
                                    Elija
                                </option>
                                <option>Trujillo</option>
                                <option>Piura</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck2"
                                    required
                                />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Acepta Términos y Condiciones
                                </label>
                            </div>
                        </div>

                        <button className="btn btn-primary">
                            <i data-feather="log-in"></i> REGISTRAR
                        </button>
                    </form>
                </div>
                <div className="col-md-2"></div> {/* Columna vacía para equilibrar el diseño */}
            </div>
        </div>
    );
}

export default Content;

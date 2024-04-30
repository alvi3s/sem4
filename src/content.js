import Button from "react-bootstrap/Button";

const feather = require('feather-icons');
setTimeout (() =>{
    feather.replace();
}, 1000);

const Content = () => {
    return <form class="mb-3">
        <div class="col-md-6">
            <label for="validationDefault01" class="form-label"><i data-feather="user"></i>Nombre Completo</label>
            <input type="text" class="form-control" id="validationDefault01" value="Yamir Mijail" required></input>
        </div>

        <br></br>

        <div class="col-md-6">
            <label for="validationDefault02" class="form-label"><i data-feather="user"></i>Apellidos Completos</label>
            <input type="text" class="form-control" id="validationDefault02" value="Vargas Alvitres" required></input>
        </div>

        <br></br>

  <div class="col-md-6">
    <label for="validationDefaultUsername" class="form-label"><i data-feather="at-sign"></i>Usario</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
    </div>
  </div>

  <br></br>

  <div class="col-md-6">
    <label for="validationDefault03" class="form-label"><i data-feather="map"></i>Ciudad</label>
    <input type="text" class="form-control" id="validationDefault03" required></input>
  </div>

  <br></br>

  <div class="col-md-6">
    <label for="validationDefault04" class="form-label"><i data-feather="map-pin"></i>Estado</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Eija</option>
      <option>Trujillo</option>
      <option>Piura</option>
    </select>
  </div>
  <br></br>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Acepta Términos y Condiciones
      </label>
    </div>
  </div>

  <button className="btn btn-primary">
    <i data-feather="log-in"></i>REGISTRAR</button>
</form>
}
export default Content;
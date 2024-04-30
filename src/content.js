import Button from "react-bootstrap/Button";

const feather = require('feather-icons');
setTimeout (() =>{
    feather.replace();
}, 1000);

const Content = () => {
    return <form class="mb-3">
        <div class="col-md-6">
            <label for="validationDefault01" class="form-label"><i data-feather="user"></i>First name</label>
            <input type="text" class="form-control" id="validationDefault01" value="Roxana" required></input>
        </div>

        <br></br>

        <div class="col-md-6">
            <label for="validationDefault02" class="form-label"><i data-feather="user"></i>Last name</label>
            <input type="text" class="form-control" id="validationDefault02" value="Renteria" required></input>
        </div>

        <br></br>

  <div class="col-md-6">
    <label for="validationDefaultUsername" class="form-label"><i data-feather="at-sign"></i>Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
    </div>
  </div>

  <br></br>

  <div class="col-md-6">
    <label for="validationDefault03" class="form-label"><i data-feather="map"></i>City</label>
    <input type="text" class="form-control" id="validationDefault03" required></input>
  </div>

  <br></br>

  <div class="col-md-6">
    <label for="validationDefault04" class="form-label"><i data-feather="map-pin"></i>State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose</option>
      <option>Trujillo</option>
      <option>Cajamarca</option>
      <option>Piura</option>
      <option>Iquitos</option>
    </select>
  </div>
  <br></br>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>

  <button className="btn btn-primary">
    <i data-feather="log-in"></i>Ingresar</button>
</form>
}
export default Content;
const Main = () => {
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://d1l2ivnr70xlj8.cloudfront.net/sami3-prod/kawasaki.com.pe/images/productos/nonj400sliviana-K2EX400KRTNNGY2T0297.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: 'black' }}>NINJA 400 ABS KRT EDITION</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://fulltienda.cl/wp-content/uploads/2022/01/bajaj-pulsar-rs200-nuevo-diseno-2021-rojo-e4b698.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: 'black' }}>PULSAR RS 200</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            {/* Comentario eliminado porque no es válido en JSX */}
            <img src="https://motorlandperu.com/wp-content/uploads/2023/09/PHO_BIKE_90_REVO_MY24-KTM-250-DUKE-front-rightt_SALL_AEPI_V1.png" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: 'black' }}>DUKE 250 ABS 2024 KTM</h5>
              <p></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Main;
  
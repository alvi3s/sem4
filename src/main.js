import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://d1l2ivnr70xlj8.cloudfront.net/sami3-prod/kawasaki.com.pe/images/productos/nonj400sliviana-K2EX400KRTNNGY2T0297.png"
          alt="NINJA 400 ABS KRT EDITION"
        />
        <Carousel.Caption>
          <h3>NINJA 400 ABS KRT EDITION</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://fulltienda.cl/wp-content/uploads/2022/01/bajaj-pulsar-rs200-nuevo-diseno-2021-rojo-e4b698.png"
          alt="PULSAR RS 200"
        />
        <Carousel.Caption>
          <h3>PULSAR RS 200</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://motorlandperu.com/wp-content/uploads/2023/09/PHO_BIKE_90_REVO_MY24-KTM-250-DUKE-front-rightt_SALL_AEPI_V1.png"
          alt="DUKE 250 ABS 2024 KTM"
        />
        <Carousel.Caption>
          <h3>DUKE 250 ABS 2024 KTM</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const motos = [
   {
    "name": "KTM Duke 250",
    "slug": "KTM",
    "description": ".",
    "picture": "https://motorlandperu.com/wp-content/uploads/2023/09/PHO_BIKE_90_REVO_MY24-KTM-250-DUKE-front-rightt_SALL_AEPI_V1.png"
  }, 
  {
    "name": "PULSAR RS-200",
    "slug": "PULSAR",
    "description": ".",
    "picture": "https://fulltienda.cl/wp-content/uploads/2022/01/bajaj-pulsar-rs200-nuevo-diseno-2021-rojo-e4b698.png"
  },

  {
    "name": "NINJA 650 ABS KRT",
    "slug": "NINJA",
    "description": ".",
    "picture": "https://d1l2ivnr70xlj8.cloudfront.net/sami3-prod/kawasaki.com.pe/images/productos/nonj400sliviana-K2EX400KRTNNGY2T0297.png"
  },
];

const Carrusel = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  return (
    <Carousel>
      {
        motos.map(it => (
          <Carousel.Item key={it.slug} onClick={(e) => {
            e.preventDefault(); handleClick(it.slug)
          }}>
            <img
              className='d-block w-100'
              src={it.picture}
              alt={it.name}
              style={{ height: '500px', objectFit: 'cover' }} 
            />
            <Carousel.Caption>
              <h3>{it.name}</h3>
              <p>{it.description}</p>
              <button className="btn btn-primary">Ver detalle</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Carrusel;

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const motos = [
    {
        "name": "ninja",
        "slug": "ninja",
        "description": "Este modelo tiene una cilindrada de 636cc y un cambio de retorno de 6 velocidades, el motor de 4 tiempos y 4 cilindros con 4 válvulas por cilindro con refrigeración líquida te harán sentir la verdadera potencia en acción donde tu elijas, ciudad o carretera.",
        "picture": "https://d1l2ivnr70xlj8.cloudfront.net/sami3-prod/kawasaki.com.pe/images/productos/nonj400sliviana-K2EX400KRTNNGY2T0297.png"
    },
  
    {
        "name": "PULSAR",
        "slug": "PULSAR",
        "description": "Si buscas escarapelar el cuerpo con adrenalina, esta debe ser una firme candidata para tu garaje. Es una moto con cromosomas netamente deportivos, musculosa, corpulenta, atrevida, impetuosa, de alto desempeño. Solo algunos podrán domarla. ¿Te atreves?",
        "picture": "https://fulltienda.cl/wp-content/uploads/2022/01/bajaj-pulsar-rs200-nuevo-diseno-2021-rojo-e4b698.png"
    },
  
    {
        "name": "KTM",
        "slug": "KTM",
        "description": "La KTM 250 DUKE equipa orgullosa un nuevo propulsor de 250 cc: ¡esta máquina es 250% DUKE! Construida con el mismo carácter NAKED que sus hermanas mayores, la KTM 250 DUKE 2024 presume de una actitud totalmente nueva y musculosa, con un nuevo chasis, suspensiones, luces LED, tecnología de asistencia al pilotaje y una agresividad que arrasa en las calles y en las curvas.",
        "picture": "https://motorlandperu.com/wp-content/uploads/2023/09/PHO_BIKE_90_REVO_MY24-KTM-250-DUKE-front-rightt_SALL_AEPI_V1.png"
    },
  ];

const Carrusel = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }
  
  return <Carousel>
    {
      muebles.map(it => {
        return (<Carousel.Item onClick={(e) => {
          e.preventDefault(); handleClick(it.slug)
        }}>
          <img className='w-100 dark-image' src={it.picture}></img>
          <Carousel.Caption>
            <h3>{it.name}</h3>
            <p>{it.description}</p>
            <button className="btn btn-primary">Ver detalle</button>
          </Carousel.Caption>
        </Carousel.Item>);
      })
    }
  </Carousel>;
}

export default Carrusel;

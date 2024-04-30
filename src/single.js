import Motos from './data/motos.json';

const Single = () => {

    const currentRoute = window.location.pathname;
    const moto = Motos.find(it => currentRoute.includes(it.slug))
    
    return (<>
        <h1>{moto.name}</h1>
        <hr></hr>
        <img src={moto.picture}></img>
        <center><p>{moto.description}</p></center>
    </>);
}

export default Single;
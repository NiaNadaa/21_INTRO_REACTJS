function Main(props){
    let tarjetas = props.peliculas.map(function(pelicula){
    return(
    <div className="card">
        <img src={pelicula.cartel} alt={pelicula.titulo}/>
        <div className="container">
        <h3>{pelicula.titulo}</h3>
        <p>{pelicula.sinopsis}</p>
        </div>
    </div>)
    })

return <div className="catalogo">{tarjetas}</div>;
}


export default Main;


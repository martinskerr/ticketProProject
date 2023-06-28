import React from 'react';
import datosConcierto from "./mocks/productos.json";
import Card from 'react-bootstrap/Card';
import './ui/cardConcierto.css'



const CartaPresentacionConcierto = () => {
  const { productos } = datosConcierto;

  return (
    <div className='mainConciertos'>
      {productos.map((producto, index) => (

       <a href=""> <Card className="card bg-dark text-white separated-card " key={index}>
        <Card.Img src={producto.rutaImagen} alt="Card image" className=""/>
        <Card.ImgOverlay >
        <Card.Title> {producto.nombre}</Card.Title>
        <Card.Text>
            Fecha de Presentacion {producto.fecha }
        </Card.Text>

        <Card.Text></Card.Text>
        </Card.ImgOverlay>
        </Card>
        </a>
      ))}
    </div>
  );
}

export default CartaPresentacionConcierto;



{/* <div className=" card " key={index}>
<h2>{producto.nombre}</h2>
<p>Fecha: {producto.fecha}</p>
<img src={producto.rutaImagen} />
<p>Precio Nivel 2: {producto.precio1}</p>
<p>Precio Nivel 3: {producto.precio2}</p>
<p>Precio Nivel 4: {producto.precio3}</p>
</div> */}
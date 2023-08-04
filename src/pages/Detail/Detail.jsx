import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailById } from "../../redux/actions";
import logo from "../../assets/logo.png";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";

function Detail() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailById(id));
  }, [dispatch, id]);

  console.log(data);

  return (
    <div className={style.contenedor}>
      {data && Object.keys(data).length > 0 ? (
        <div>
          <img
            className={style.imagen}
            src={data.img}
          
          />
          <div className={style.contenedorInfo}>
            <h1>Modelo: {data.modelo}</h1>
            <h4>Categoria: {data.categoria}</h4>
          </div>
          <div className={style.cartaPrecio}>
            <p className={style.letra}>Precio</p>
            <p className={style.precio}>${data.precio}</p>
          </div>
          <div className={style.garantias}>
            <i className="bx bxs-truck"> Envio Gratis</i>
            <i className="bx bx-check"> Stock Disponible</i>
            <i className="bx bx-shield-quarter"> Con garantias</i>
          </div>
          <button className={style.buy}>Añadir al carrito</button>
          <p className={style.descripcion}>ESPECIFICACIONES: </p>

          <div className={style.especificaciones}>
            {data.especificaciones &&
              Object.entries(data.especificaciones).map(([key, value]) => (
                <h2 className={style.info} key={key}>
                  <p className={style.letrasEspe}>{key}:</p> {value}
                </h2>
              ))}
          </div>
          <div className={style.logo}>
            <img src={logo}  />
            <img className={style.logo2} src={logo}/>
          </div>
          <NavLink className={style.back} to="/">
            Home
          </NavLink>

          <footer className="footer">
            <p>Si tenés sugerencias o comentarios</p>
            <NavLink to="/contactanos">Contactanos</NavLink>
            <p>© 2023 PC Universe. Todos los derechos reservados.</p>
          </footer>
        </div>
      ) : (
        <div>
          <p>Cargando</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

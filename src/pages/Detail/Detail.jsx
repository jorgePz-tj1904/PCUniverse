import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { getDetailById, postComentario, addToCart, getComentarios } from "../../redux/actions";

function Detail() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [done, setDone] = useState(false);
  const [comentarios, setComentarios] = useState("");
  const data = useSelector((state) => state.detail);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getDetailById(id));
    if (data.id) {
      dispatch(getComentarios(data.id));
    }
  }, [dispatch, id,comments]);

  const loadInfo = (event) => {
    setComentarios(event.target.value);
  };

  const pushData = () => {
    dispatch(postComentario(comentarios, data.id));
    setComentarios("");
  };
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  return (
    <div>
      <NavLink id={style.atras} to='/componentes'>
        <i className='bx bx-left-arrow-alt'></i>
      </NavLink>
      {data && Object.keys(data).length > 0 ? (

        <div>
           <div className={style.infoContainer}>
           <img
              id={style.imagen}
              src={data.img}
            />
            <div className={style.contenedorInfo}>
              <h1>Modelo: {data.modelo}</h1>
              <h4 id={style.categoria}>Categoria: {data.categoria}</h4>
             <div className={style.cartaPrecio}>
              <h3 className={style.letra}>Precio</h3>
              <h3 className={style.precio}>${data.precio}</h3>
              <ul id={style.garantias}>
                <i className="bx bxs-truck"> Envio Gratis</i>
                <i className="bx bx-check"> Stock Disponible</i>
                <i className="bx bx-shield-quarter"> Con garantias</i>
              </ul>
              {!done ? (
                <button
                id={style.carrito}
                className={style.botones}
                onClick={() => {
                  dispatch(addToCart(data.id));
                  setDone(true);
                }}
                >
                  Añadir al carrito
                </button>
              ) : (
                <img
                src="https://i.ibb.co/jVtJDr8/icons8-marca-de-verificaci-n-52.png"
                alt="icons8-marca-de-verificaci-n-52"
                width={50}
                />
                )}
           </div>
          </div>
        </div>
          <h4 id={style.subTitulo}>ESPECIFICACIONES: </h4>

          <div className={style.especificaciones}>
            {data.especificaciones &&
              Object.entries(data.especificaciones).map(([key, value]) => (
                <div className={style.info} key={key}>
                  <p className={style.letrasEspe}>{key} : {value}</p>
                </div>
              ))}
          </div>


          <div className={style.comentsConteiner}>
          <option value="">-- Qualification --</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>

            <h4>Opiniones y preguntas:</h4>
            <div className={style.commentInputContainer}>
               <input onChange={loadInfo} type="text" value={comentarios} onKeyDown={(e) => e.key === "Enter"?pushData():null}/>
               <button className={style.botones} onClick={pushData}>comentar</button>
            </div>
            <div>
            {comments && comments.comment ? (
              comments.comment.map((com) => (
              <p className={style.comentarios} key={com.id}>{com.comentarios}</p>
             ))
            ) : (
            <h3>todavía nadie ha comentado, ¡sé el primero!</h3>
            )}
            </div>
          </div>
          <NavLink className={style.botones} to="/componentes">
            Back
          </NavLink>

          <footer className="footer">
            <p>Si tienes sugerencias o comentarios</p>
            <NavLink to="/contactanos">Contáctanos</NavLink>
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

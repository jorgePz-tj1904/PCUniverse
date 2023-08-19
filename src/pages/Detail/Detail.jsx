import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { getDetailById, postComentario, addToCart, getComentarios } from "../../redux/actions";
import { Rate, Button,Input,Space,Card, Col, Row} from 'antd';


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
    dispatch(getComentarios(data.id));
  }, [comentarios]);

  const loadInfo = (event) => {
    setComentarios(event.target.value);
  };

  const pushData = () => {
    dispatch(postComentario(comentarios, data.id));
    setComentarios("");
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
              <Rate defaultValue={5} disabled/>
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

         <Card id={style.cardEspecificaciones} className={style.cardsClass} style={{ maxWidth: 900, fontSize:'20px',marginBottom:'20px', }}>
         <div className={style.especificaciones}>
          {data.especificaciones && (
          Object.entries(JSON.parse(data.especificaciones)).map(([key, value]) => (
          <div className={style.info} key={key}>
          <p className={style.letrasEspe}>{key} : {value}</p>
         </div>
          ))
         )}
         </div>
         </Card>


          <div className={style.comentsConteiner}>

            <h4>Preguntas:</h4>
            <p>Realiza cualquier pregunta respecto al producto, y se la contestaremos a la brevedad! <i class='bx bx-down-arrow-alt'></i></p><br />
            <div className={style.commentInputContainer}>
            <Space.Compact block>
             <Input onChange={loadInfo} value={comentarios} style={{ width: 'calc(100% - 100px)', fontSize:'20px' }} placeholder="pregunta aqui" onKeyDown={(e) => e.key === "Enter"?pushData():null} />
             <Button style={{ backgroundColor:'#aa00ff', fontSize:'20px',height:'50px' }} type="primary">enviar</Button>
           </Space.Compact>
            </div>
               {/* <Rate onChange={(value)=>setRating(value)}/> */}
            <div>
            {comments && comments.comment ? (
              comments.comment.map((com) => (
                <Card id={style.cardComentario} style={{ maxWidth:'900px', fontSize:'15px',marginTop:'30px', boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.5)'}} bordered={false}>
                <p  key={com.id}>{com.comentarios}</p>
                </Card>
             ))
            ) : (
            <h3>todavía nadie ha comentado, ¡sé el primero!</h3>
            )}
            </div>
          </div>

             <div className={style.opiniones}>
             <h3>Opiniones</h3>
             <p>Mira las opiniones dejadas por los compradores del producto</p>
          <Card id={style.cardOpiniones} className={style.cardsClass} style={{maxWidth:'900px',}} title={<><Rate defaultValue={5} disabled/><h4>5 Estrellas!</h4></>}>
            <div>
              <Card >
              <Rate defaultValue={3} disabled/>
                <p>esta es una opinion harcodeada</p>
              </Card>
            </div>
          </Card>
             </div>


          <NavLink id={style.back} className={style.botones} to="/componentes">
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

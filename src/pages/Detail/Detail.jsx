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
  const [loged, setLoged]=useState(false);
  const [comentarios, setComentarios] = useState({
    comentario:'',
    rating:0
  });
  const data = useSelector((state) => state.detail);
  const comments = useSelector((state) => state.comments);


  useEffect(() => {
    dispatch(getDetailById(id));
    dispatch(getComentarios(data.id));
    changeLogin();
  }, [comments]);

  const changeLogin=async()=>{
    const storedValue  = await localStorage.getItem('login');
    const isUserLoggedIn = storedValue === 'true';
    setLoged(isUserLoggedIn);
  }

  const loadInfo = (event) => {
    setComentarios(event.target.value);
  };

  const pushData = () => {
    dispatch(postComentario(comentarios,rating,data.id));
    setComentarios({
      comentario:'',
      rating:0
    });
  };

  const rateHandler = (value) => {
    console.log(value);
    setRating(value);
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
              {comments.weightedAverageRatingN?<Rate defaultValue={comments.weightedAverageRatingN} disabled/>:null}
              {loged ? (
      !done ? (
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
      )
    ) : (
      <h3>Inicia sesión para poder comprar este producto.<i class='bx bxs-error-alt'></i></h3>
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

            <h4>Preguntas y opiniones:</h4>
            <p>Realiza cualquier pregunta respecto al producto, y se la contestaremos a la brevedad! <i class='bx bx-down-arrow-alt'></i></p><br />
         

              <Card style={{maxWidth:900, boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.5)'}}>

        
               <Input onChange={loadInfo} value={comentarios.comentario} style={{ width: 'calc(100% - 100px)', fontSize:'20px' }} placeholder="pregunta aqui" onKeyDown={(e) => e.key === "Enter"?pushData():null} />
               <Button onClick={()=>{pushData();dispatch(getComentarios(data.id));}} style={{ backgroundColor:'#aa00ff', fontSize:'20px',height:'50px' }} type="primary">enviar</Button>
               <p>si tienes algo que opinar sobre el producto puedes ponerle una puntuación!</p>
               <Rate onChange={rateHandler} />
               <p>{rating}</p>

              </Card>
          
            <div>
            {comments && comments.ratings ? (
              comments.ratings.slice(0).reverse().map((com) => (  // Invierte el orden aquí
                <Card id={style.cardComentario} style={{ maxWidth:'900px', fontSize:'15px',marginTop:'30px', boxShadow:'0px 0px 12px 0px rgba(0,0,0,0.5)'}} bordered={false}>
                <p  key={com.id}>{com.opinion}</p>
                <Rate defaultValue={com.rating} disabled/>
                </Card>
              ))
              ) : (
              <></>
            )}
            </div>
          </div>


          <NavLink id={style.back} className={style.botones} to="/componentes">
            Back
          </NavLink>
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

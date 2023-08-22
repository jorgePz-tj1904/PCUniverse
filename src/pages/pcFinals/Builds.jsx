import { getAllPc, deletePc } from "../../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterMain from '../../pages/Footer/FooterMain'
import style from './builds.module.css'

const Builds = () => {
  const [builds, setBuilds] = useState([]);
  const [detail, setDetail] = useState([]);
  const pc = useSelector((state) => state.pcFinals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPc());
    getBuilds();
  }, [pc]);

const getBuilds = () => {
  const buildsArray = [];
  console.log(pc);
  for (const buildData of pc) {
    const build = [];

    for (let i = 0; i < buildData.componenteId.length; i++) {
      build.push({
        id: buildData.componenteId[i],
        modelo: buildData.modelo[i],
        img: buildData.img[i],
        precio: buildData.precio[i],
        categoria: buildData.categorias[i]
      });
    }

    const precioTotal = buildData.precio_total;

    build.push({ precioTotal });
    build.push({id: buildData.id});
    buildsArray.push(build);
  };
  console.log(buildsArray);
  setBuilds(buildsArray);
};
const deletePCHandler = (id) => {
  dispatch(deletePc(id));
  // Actualiza la lista de construcciones eliminando la construcción con el ID especificado
  setBuilds(builds.filter((build) => build[build.length - 1].id !== id));
};

  return (
    <div className={style.conteiner}>
      {/* <button onClick={() => getBuilds()}>Obtener Builds</button> */}
      <div className={style.BuildsConteiner}>
        {
          builds.length>0?builds.map((pc, index) => (
            <div className={style.cardBuild} key={index}>
  
              {pc.map((componente, compIndex) => (
                <div key={compIndex}>
                  <p><b>{componente.categoria}</b></p>
                  <p>{componente.modelo}</p>
                  {compIndex === pc.length - 2 && <>
                  <hr/>
                  <h2>Precio: {componente.precioTotal} $</h2>
  
                  <a href="#details" id={style.detalles} className={style.botones} onClick={() => setDetail(pc)}>Detalles</a></>}
  
                  {compIndex === pc.length-1 && <img id={style.delete} width={30} src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" onClick={() => {deletePCHandler(pc[pc.length-1].id)}}/>}
                </div>
              ))}
              
            </div>
          )):<div><h1 id={style.noBuilds}>Todavia no hay builds</h1> <img src="https://i.ibb.co/sP3y3K2/icons8-cancelar-2-128.png" alt="icons8-cancelar-2-128" border="0"/></div>
        }
      </div>
      <hr />
      <div className={style.detailConteiner}>
      {detail.length !== 0 && (
         <div id="details" className={style.componentesSelected}>
         <h2>Componentes seleccionados:</h2>
         {detail.slice(0, detail.length - 2).map((component) => (
           <div className={style.conteinerProduct} key={component.id}>
             <img id={style.imgSelected} src={component.img} alt={component.modelo} />
             <p id={style.modelSelected}>{component.modelo}</p>
             <p id={style.precio}>{component.precio} $</p>
           </div>
         ))}
       </div>)}
       <button className={style.botones}>ir al carrito</button>
      </div>
      <FooterMain/>
    </div>
  );
};

export default Builds;

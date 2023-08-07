import React, { useEffect, useState } from "react";
import style from './Form.module.css';
import { getComponents } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Form = () => {

  const componentes = useSelector((state)=> state.allComponents);
  const dispatch = useDispatch();

  const [componentsToShow, setComponentsToShow] = useState([]);
  const [total, setTotal] = useState(0);
  const [computer, setComputer] = useState([]);
  const [procesador, setProcesador]=useState(false)
  const [mother, setMother] = useState(false);
  const [ram, setRam]=useState(false);
  const [grafica, setGrafica]=useState(false);
  const [disco, setDisco]=useState(false);
  const [fuente, setFuente]=useState(false);
  const [counter, setCount] =useState(0);
  const [selectedCategories, setSelectedCategories] = useState({
    procesador: false,
    mother: false,
    ram: false,
    grafica: false,
    disco: false,
    fuente: false,
  });
  const categorias = ['procesador', 'placa madre', 'memoria ram', 'placa grafica', 'disco', 'fuente de poder']

useEffect(()=>{
  dispatch(getComponents());
  componentsHandler(categorias[counter]);
},[componentes]);

const postPcfinal=(pc)=>{
  try {
    axios.post('http://localhost:3001/componentes/handlers/postPC',{
      precio_total: total,
      componentes: computer,
    })
  } catch (error) {
    
  }
}
const categoryHandler=(category)=>{
  if(category === 'placa madre'){
    if(procesador){
      const socket = computer[0].especificaciones.socket;
      const mothers = componentes.filter((components)=> components.especificaciones.socket === socket && components.categoria===category);
    return setComponentsToShow(mothers);
    }
  }
  if(category === 'placa grafica'){
    if(mother){
      const pciE = computer[1].especificaciones.pci_express;
      const graphics = componentes.filter((components)=> components.especificaciones.pci_express === pciE && components.categoria===category);
      return setComponentsToShow(graphics);
    }
  }
  const comp = componentes.filter((components)=> components.categoria===category);
  return setComponentsToShow(comp);
}

  const colorHandler=(component)=>{
    const category = component.categoria.toLowerCase();
    switch(category){
      case 'procesador':
        return setProcesador(true);
      case 'placa madre':
        return setMother(true);
      case 'memoria ram':
        return setRam(true);
      case 'placa grafica':
        return setGrafica(true);
      case 'disco':
        return setDisco(true);
      case 'fuente de poder':
        return setFuente(true);
      default:
        break;
    }
  }
  const componentsHandler = (category) => {
    switch(category){
      case 'procesador':
      case 'placa madre':
      case 'memoria ram':
      case 'placa grafica':
      case 'disco':
      case 'fuente de poder':
        return categoryHandler(category);
      default:
        break;
    }
  };

  const addToComputer = (component) => {
    const isComponentAlreadyAdded = computer.some((comp) => comp.id === component.id);
  if (isComponentAlreadyAdded) {
    return alert("Ya contiene ese componente");
  }
  console.log(component.socket);
    const category = component.categoria.toLowerCase();
    if (selectedCategories[category]) {
      console.log(selectedCategories);
      return alert(`Ya seleccionaste un componente de la categoría "${category}".`);
    }

    if (category === 'placa madre') {
      const compatibleProcessor = computer.find((cpu) => cpu.especificaciones.socket === component.especificaciones.socket);
      console.log(compatibleProcessor);
      if (!compatibleProcessor) {
        return alert(`El procesador compatible no se encuentra para esta motherboard.`);
      }
    }
    setCount(counter +1)
    setComputer([...computer, component]);
    setTotal(total + component.precio);
    setSelectedCategories((prevCategories) => ({ ...prevCategories, [category]: true }));
    counter<5?componentsHandler(counter):setFuente(true)
  };

  const removeFromComputer = (component) => {
    const removedComponent = computer.find((com) => com.modelo === component.modelo);
    if (!removedComponent) return;

    const updatedComputer = computer.filter((com) => com.modelo !== component.modelo);
    setComputer(updatedComputer);
    setTotal(total - removedComponent.precio);

    console.log(selectedCategories);
    const category = removedComponent.categoria.toLowerCase();
    setSelectedCategories((prevCategories) => ({ ...prevCategories, [category]: false }));
    setCount(counter-1)
  };
    
    return(
        <div className={style.conteiner}>
            <p id={style.titulo}>Armá tu pc</p>
            <img onClick={()=>counter>0? setCount(counter-1):null} id={style.izquierda} className={style.navBtn} src="https://i.ibb.co/d0SYGLw/icons8-doble-izquierda-100.png" alt="icons8-doble-izquierda-100" border="0"/>
            
            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/down-squared--v2.png" alt="down-squared--v2"/>
            <img onClick={counter<5? ()=>setCount(counter+1):null} id={style.derecha} className={style.navBtn} src="https://i.ibb.co/MZ6n2XG/icons8-doble-izquierda-100-1.png" alt="icons8-doble-izquierda-100-1" border="0"/>
            <h2>{categorias[counter]}</h2>
            <div className={style.timeline}>

              
                {
                  procesador?
                   <img width={65} src="https://i.ibb.co/nBh57qj/icons8-procesador-80.png" alt="icons8-procesador-80" border="0"/> :
                   <img width={65} src="https://img.icons8.com/dotty/80/000000/processor.png" alt="processor"/>
                }
              <div className={style.lineas} style={{ backgroundColor: procesador ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  mother?
                  <img width={60} src="https://i.ibb.co/K619VYR/icons8-placa-base-96.png" alt="icons8-placa-base-96" border="0"/>:
                  <img width={60} src="https://img.icons8.com/external-goofy-line-kerismaker/96/000000/external-Motherboard-computer-hardware-goofy-line-kerismaker.png" alt="external-Motherboard-computer-hardware-goofy-line-kerismaker"/>
                }
              <div className={style.lineas} style={{ backgroundColor: mother ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  ram?
                  <img src="https://i.ibb.co/qxcnBTZ/icons8-ram-64.png" alt="icons8-ram-64" border="0"/>:
                  <img width="64" height="64" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-ram-computer-xnimrodx-lineal-xnimrodx.png" alt="external-ram-computer-xnimrodx-lineal-xnimrodx"/>
                }
              
              <div className={style.lineas} style={{ backgroundColor: ram ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  grafica?
                  <img src="https://i.ibb.co/LCsVcqf/icons8-tarjeta-de-video-80.png" alt="icons8-tarjeta-de-video-80" border="0"/>:
                  <img width="80" height="80" src="https://img.icons8.com/dotty/80/000000/video-card.png" alt="video-card"/>
                }
            
              <div className={style.lineas} style={{ backgroundColor: grafica ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  disco?
                  <img src="https://i.ibb.co/d4Grr6K/icons8-disco-duro-64.png" alt="icons8-disco-duro-64" border="0"/>:
                  <img width="64" height="64" src="https://img.icons8.com/wired/64/hdd.png" alt="hdd"/>
                }
        
              <div className={style.lineas} style={{ backgroundColor: disco ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  fuente?
                  <img src="https://i.ibb.co/DVm3BTv/icons8-power-supply-62.png" alt="icons8-power-supply-62" border="0"/>:
                  <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-detailed-outline-rabit-jes/62/external-power-supply-computer-hardware-rabit-jes-detailed-outline-rabit-jes.png" alt="external-power-supply-computer-hardware-rabit-jes-detailed-outline-rabit-jes"/>
                }

            </div>
            <hr />
            {/* estas son las cards */}
            {
              computer.length<6?(
                <div className={style.cardConteiner}>
              {componentsToShow.map(component => (
              <div className={style.card} key={component.modelo} onClick={() => {addToComputer(component); colorHandler(component)}}>
                <img src={component.img}/>
              <h3>{component.modelo}</h3>
              <h4>stock</h4>
              <h3>{component.precio} $</h3>
              <NavLink id={style.detalle} to={`/detail/${component.id}`}>Detalles</NavLink>
               </div>
              ))}
           </div>
              ): (<><h1>Listo!</h1> <img src="https://i.ibb.co/P51w3NG/icons8-hecho-96.png" alt="icons8-hecho-96" border="0"/></>)
            }
           {/* componentes seleccionados */}
      <div>
        <hr />
        {computer.length > 0 && (
          <div className={style.componentesSelected}>
            <h2>Componentes seleccionados:</h2>
            {computer.map((component) => (
              <div className={style.conteinerProduct} key={component.id}>
                <img id={style.delete} width={30} src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" onClick={() => removeFromComputer(component)}/>
                <img id={style.imgSelected} src={component.img}/>
                <p id={style.modelSelected}>{component.modelo}</p>
                {/* {component.categoria === 'memoria ram'||component.categoria ==='disco'?
                (
                  <>
                  <button onClick={()=>setCantidad(prev => prev - 1)}>-</button>
                  {cantidad[component.categoria]}
                  <button onClick={()=>setCantidad(prev => prev + 1)}>+</button>
                  </>
                ):null
                } */}
              </div>
            ))}
          </div>
            )}
            <p id={style.total}>total: {total} $</p> 
            <button className={style.buy}>ir al carrito</button>
        </div>
          <footer className="footer">
      <p>Si tenés sugerencias o comentarios</p>
      <a href="/contactanos">Contactanos</a>
      <p>© 2023 PC Universe. Todos los derechos reservados.</p>
    </footer>
        </div>
    );
};

export default Form
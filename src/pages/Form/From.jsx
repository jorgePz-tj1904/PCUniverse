import React, { useEffect, useState } from "react";
import style from './Form.module.css';
import { getAllComponents, postComponents, getAllPc} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Form = () => {
  const componentes = useSelector((state)=> state.allComponents);
  const dispatch = useDispatch();

  const [componentsToShow, setComponentsToShow] = useState([]);
  const [total, setTotal] = useState(0);
  const [computer, setComputer] = useState({
    precio_total: 0,
    componentes: [],
  });
  const [procesador, setProcesador]=useState(false)
  const [mother, setMother] = useState(false);
  const [gabinete, setGabinete]=useState(false);
  const [ram, setRam]=useState(false);
  const [grafica, setGrafica]=useState(false);
  const [disco, setDisco]=useState(false);
  const [fuente, setFuente]=useState(false);
  const [perifericos, setPerifericos]=useState(false);
  const [counter, setCounter] =useState(-1);
  const [done, setDone]=useState(false)
  const [ventilador, setVentilador]=useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    procesador: false,
    mother: false,
    ram: false,
    grafica: false,
    disco: false,
    fuente: false,
  });
  const categorias = ['procesador', 'placa madre','gabinete', 'refrigeracion', 'memoria ram', 'placa grafica', 'disco', 'fuente de poder','periferico']

useEffect(()=>{
  dispatch(getAllComponents());
  componentsHandler(categorias[counter]);
  if(computer.componentes.length === 0){
    setDone(false);
  }
},[counter]);

{/* --------------------manejar las compatibilidades y los componentes que se muestran----------------------------- */}

const categoryHandler=(category)=>{
  if(category === 'placa madre'){
    if(procesador){
      const socket = computer.componentes[0].especificaciones.socket;
      const mothers = componentes.filter((components)=> components.especificaciones.socket === socket && components.categoria===category);
    return setComponentsToShow(mothers);
    }
  }
  if(category === 'placa grafica'){
    if(mother){
      const pciE = computer.componentes[1].especificaciones.pci_express;
      const graphics = componentes.filter((components)=> components.especificaciones.pci_express === pciE && components.categoria===category);
      return setComponentsToShow(graphics);
    }
  }
  if(category === 'periferico'){

    const perifericos = componentes.filter(c => c.categoria === 'periferico');
    const monitor = componentes.filter(c => c.categoria === 'monitor');
    return setComponentsToShow([...perifericos, ...monitor]);
  }
  const comp = componentes.filter((components)=> components.categoria===category);
  return setComponentsToShow(comp);
}

{/* --------------------manejar los colores de la barra de progreso----------------------------- */}

  const colorHandler=(category)=>{
    switch(category){
      case 'procesador':
        return setProcesador(true);
      case 'placa madre':
        return setMother(true);
      case 'gabinete':
        return setGabinete(true);
      case 'refrigeracion':
        return setVentilador(true);
      case 'memoria ram':
        return setRam(true);
      case 'placa grafica':
        return setGrafica(true);
      case 'disco':
        return setDisco(true);
      case 'fuente de poder':
        return setFuente(true);
      case 'periferico':
        return setPerifericos(true)
      default:
        break;
    }
  }

  {/* --------------------manejar los componentes que se muestran----------------------------- */}

  const componentsHandler = (category) => {
    switch(category){
      case 'procesador':
      case 'placa madre':
      case 'gabinete':
      case 'refrigeracion':
      case 'memoria ram':
      case 'placa grafica':
      case 'disco':
      case 'fuente de poder':
      case 'periferico' || 'monitor':
        return categoryHandler(category);
      default:
        break;
    }
  };

  {/* --------------------add function----------------------------- */}

  const addToComputer = (component) => {
    const isComponentAlreadyAdded = computer.componentes.some((comp) => comp.id === component.id);
    if (isComponentAlreadyAdded) {
      return alert("Ya contiene ese componente");
    }
  
    const category = component.categoria.toLowerCase();
    if (selectedCategories[category]) {
      return alert(`Ya seleccionaste un componente de la categoría "${category}".`);
    }
  
    if (category === 'placa madre') {
      const compatibleProcessor = computer.componentes.find((cpu) => cpu.especificaciones.socket === component.especificaciones.socket);
      if (!compatibleProcessor) {
        return alert(`El procesador compatible no se encuentra para esta motherboard.`);
      }
    }

    if(category === 'periferico'){
      return setComputer([...computer, component]);
    }

    const updatedTotal = total + component.precio;
    const updatedComputer = {
      ...computer,
      componentes: [...computer.componentes, component],
      precio_total: updatedTotal
    };

    setCounter(counter+1)
    setTotal(updatedTotal);
    setComputer(updatedComputer);
    setSelectedCategories((prevCategories) => ({ ...prevCategories, [category]: true }));
    counter < 8 ? componentsHandler(counter) : setPerifericos(true);
  };

{/* --------------------remove function----------------------------- */}

  const removeFromComputer = (component) => {
    console.log(computer);
    const removedComponent = computer.componentes.find((com) => com.modelo === component.modelo);
    if (!removedComponent) return;

    const updatedComputer = {...computer};

    updatedComputer.componentes = updatedComputer.componentes.filter((com) => com.modelo !== component.modelo);
    setComputer(updatedComputer);
    setTotal(total - removedComponent.precio);

    console.log(selectedCategories);
    const category = removedComponent.categoria.toLowerCase();
    setSelectedCategories((prevCategories) => ({ ...prevCategories, [category]: false }));
    setCounter(counter-1);
  };
    
    return(
        <div className={style.conteiner}>
          {/* --------------------bienvenida----------------------------- */}
            <p id={style.titulo}>Armá tu pc</p>
            <img onClick={()=>counter>0? setCounter(counter-1):null} id={style.izquierda} className={style.navBtn} src="https://i.ibb.co/d0SYGLw/icons8-doble-izquierda-100.png" alt="icons8-doble-izquierda-100" border="0"/>
            
            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/down-squared--v2.png" alt="down-squared--v2"/>
            <img onClick={counter<8? ()=>setCounter(counter+1):null} id={style.derecha} className={style.navBtn} src="https://i.ibb.co/MZ6n2XG/icons8-doble-izquierda-100-1.png" alt="icons8-doble-izquierda-100-1" border="0"/>
            <h2>{categorias[counter]}</h2>

            {/* ----------------barra de progreso------------------------*/}

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
                 gabinete?
                 <img src="https://i.ibb.co/54Vq3Dk/icons8-pc-66.png" alt="icons8-pc-66" border="0"/>:
                 <img width="66" height="66" src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/external-PC-overclocking-smashingstocks-detailed-outline-smashing-stocks.png" alt="external-PC-overclocking-smashingstocks-detailed-outline-smashing-stocks"/>
               }
              <div className={style.lineas} style={{ backgroundColor: gabinete ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>
                {
                  ventilador?
                  <img width={60} src="https://i.ibb.co/bvP0XxB/icons8-ventilador-64.png" alt="icons8-ventilador-64" border="0"/>:
                  <img width={60} src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-fan-equipments-icongeek26-outline-icongeek26.png" alt="external-fan-equipments-icongeek26-outline-icongeek26"/>
                }
               <div className={style.lineas} style={{ backgroundColor: ventilador ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>
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

              <div className={style.lineas} style={{ backgroundColor: fuente ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>
                {
                  perifericos?
                  <img src="https://i.ibb.co/dkGnwMf/My-project-1.jpg" alt="My-project-1"  width={58} border="0"/>:
                  <img src="https://i.ibb.co/60nX4nJ/My-project-1-1.jpg" alt="My-project-1-1" width={58}  border="0"/>
                }

            </div>
            <hr />
            {/* --------------------estas son las cards----------------------------- */}
            {counter<0&&(<> <p>Elija en orden los componentes con los que quiere que cuente su pc ideal.</p><br /><button className={style.botones} onClick={()=>setCounter(0)}>Empezar!</button></>)}
            {
              !done?(
                <div className={style.cardConteiner}>
                  <div className={style.cardsWrapper}>
                  {componentsToShow.map(component => (
                  <div className={style.card} key={component.modelo} onClick={() => {addToComputer(component); colorHandler(component.categoria)}}>
                    <img src={component.img}/>
                  <h3>{component.modelo}</h3>
                  <h4>stock</h4>
                  <h3>{component.precio} $</h3>
                  <NavLink id={style.detalle} to={`/detail/${component.id}`}>Detalles</NavLink>
                  </div>))}
  
                  </div>
                {counter>=0&&<button onClick={()=>setDone(true)} className={style.botones}>Listo?</button>}
           </div>
              ): (<><h1>Listo!</h1> <img src="https://i.ibb.co/P51w3NG/icons8-hecho-96.png" alt="icons8-hecho-96" border="0"/></>)
            }
           {/* ------------------componentes seleccionados--------------------- */}
      <div>
        <hr />
        {done && (
          <div className={style.componentesSelected}>
            <h2>Componentes seleccionados:</h2>
            {computer.componentes.map((component) => (
              <div className={style.conteinerProduct} key={component.id}>
                <img id={style.delete} width={30} src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" onClick={() => removeFromComputer(component)}/>
                <img id={style.imgSelected} src={component.img}/>
                <p id={style.modelSelected}>{component.modelo}</p>
              </div>
            ))}
          </div>
            )}
            <p id={style.total}>total: {total} $</p> 
            {done&&(<NavLink to='/pcs' className={style.botones} onClick={()=>dispatch(postComponents(computer))}>Builds</NavLink>)}
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
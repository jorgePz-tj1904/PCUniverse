import { useEffect, useState } from "react";
import style from './Form.module.css'
//import { getComponents } from "../../redux/actions";
//import { useDispatch, useSelector } from "react-redux";
import {componentes} from './componentes'


const Form = () => {

  //const allComponents = useSelector((state)=> state.allComponents);
  //const dispatch = useDispatch();

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

useEffect(()=>{
  //dispatch(getComponents());
  componentsHandler(counter);
},[]);

  const colorHandler=(component)=>{
    const category = component.categoria.toLowerCase();
    switch(category){
      case 'cpu':
        return setProcesador(true);
      case 'mother':
        return setMother(true);
      case 'ram':
        return setRam(true);
      case 'grafica':
        return setGrafica(true);
      case 'disco':
        return setDisco(true);
      case 'fuente':
        return setFuente(true);
      default:
        break;
    }
  }
  const componentsHandler = (count) => {
    const tipo = Object.keys(componentes)[count]
    console.log(counter);
    setComponentsToShow(componentes[tipo]);
    setCount(counter +1)
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

    if (category === 'mother') {
      const compatibleProcessor = computer.find((cpu) => cpu.socket === component.socket);
      console.log(compatibleProcessor);
      if (!compatibleProcessor) {
        return alert(`El procesador compatible no se encuentra para esta motherboard.`);
      }
    }
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
  };
    
    return(
        <div className={style.conteiner}>
            <p id={style.titulo}>Armá tu pc</p>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/down-squared--v2.png" alt="down-squared--v2"/>
            <div className={style.timeline}>

              
                {
                  procesador === true?
                   <img width={65} src="https://i.ibb.co/nBh57qj/icons8-procesador-80.png" alt="icons8-procesador-80" border="0"/> :
                   <img width={65} src="https://img.icons8.com/dotty/80/000000/processor.png" alt="processor"/>
                }
              <div className={style.lineas} style={{ backgroundColor: procesador ? 'rgb(170, 0, 255)' : 'rgb(17,17,17)' }}></div>

                {
                  mother ==true?
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
            <div className={style.cardConteiner}>
              {componentsToShow.map(component => (
              <div className={style.card} key={component.modelo} onClick={() => {addToComputer(component); colorHandler(component)}}>
                <img src={component.img} alt="" />
              <h3>{component.modelo}</h3>
              <h3>{component.precio} $</h3>
            </div>
        ))}
      </div>
      <div>
        <hr />
        {computer.length > 0 && (
          <div className={style.componentesSelected}>
            <h2>Componentes seleccionados:</h2>
            <ul id={style.ul}>
            {computer.map((component) => (
              <div key={component.id}>
                <img id={style.delete} width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" onClick={() => removeFromComputer(component)}/>
                <li className={style.productos}>{component.modelo}  <b>Precio</b>: {component.precio}</li>
              </div>
            ))}
            </ul>
          </div>
            )}
            <p>total: {total} $</p> 
            <button>
               <span class="circle1"></span>
               <span class="circle2"></span>
               <span class="circle3"></span>
               <span class="circle4"></span>
               <span class="circle5"></span>
               <span class="text">ir al carrito</span>
           </button>
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
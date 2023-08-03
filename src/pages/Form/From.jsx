import { useEffect, useState } from "react";
import style from './Form.module.css'
import { getComponents } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const Form = () => {

  const allComponents = useSelector((state)=> state.allComponents);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [computer, setComputer] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    procesador: false,
    mother: false,
    ram: false,
    grafica: false,
    disco: false,
    fuente: false,
  });

useEffect(()=>{
  dispatch(getComponents());
},[dispatch]);

  const componentsHandler = (componente) => {
    switch (componente) {
      case "procesador":
        setComponentsToShow(componentes.cpus);
        break;
      case "mother":
        setComponentsToShow(componentes.mothers);
        break;
      case "ram":
        setComponentsToShow(componentes.rams);
        break;
      case "grafica":
        setComponentsToShow(componentes.graficas);
        break;
      case "disco":
        setComponentsToShow(componentes.discos);
        break;
      case "fuente":
        setComponentsToShow(componentes.fuentes);
        break;
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
      return alert(`Ya seleccionaste un componente de la categoría "${category}".`);
    }

    if (component.categoria === 'mother') {
      const compatibleProcessor = computer.find((cpu) => cpu.socket === component.socket);
      console.log(compatibleProcessor);
      if (!compatibleProcessor) {
        return alert(`El procesador compatible no se encuentra para esta motherboard.`);
      }
    }

    setComputer([...computer, component]);
    setTotal(total + component.precio);
    setSelectedCategories({ ...selectedCategories, [category]: true });
  };

  const removeFromComputer = (component) => {
    const removedComponent = computer.find((com) => com.modelo === component.modelo);
    if (!removedComponent) return;

    const updatedComputer = computer.filter((com) => com.modelo !== component.modelo);
    setComputer(updatedComputer);
    setTotal(total - removedComponent.precio);

    const category = removedComponent.categoria.toLowerCase();
    setSelectedCategories({ ...selectedCategories, [category]: false });
  };
    
    return(
        <div className={style.conteiner}>
            <h1>Arma tu pc</h1>
            <p>Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.</p>
            <div className={style.timeline}>
              <button className={style.botonesArmado} onClick={() => componentsHandler('procesador')}>
                <img width={65} src="https://i.ibb.co/nBh57qj/icons8-procesador-80.png" alt="icons8-procesador-80" border="0"/>
              </button>
              <div className={style.lineas}></div>
              <button className={style.botonesArmado} onClick={() => componentsHandler('mother')}>
                <img width={60} src="https://i.ibb.co/K619VYR/icons8-placa-base-96.png" alt="icons8-placa-base-96" border="0"/>
              </button>
              <div className={style.lineas}></div>
              <button className={style.botonesArmado} onClick={() => componentsHandler('ram')}>
                <img src="https://i.ibb.co/qxcnBTZ/icons8-ram-64.png" alt="icons8-ram-64" border="0"/>
              </button>
              <div className={style.lineas}></div>
              <button className={style.botonesArmado} onClick={() => componentsHandler('grafica')}>
                <img src="https://i.ibb.co/LCsVcqf/icons8-tarjeta-de-video-80.png" alt="icons8-tarjeta-de-video-80" border="0"/>
              </button>
              <div className={style.lineas}></div>
              <button className={style.botonesArmado} onClick={() => componentsHandler('disco')}>
                <img src="https://i.ibb.co/d4Grr6K/icons8-disco-duro-64.png" alt="icons8-disco-duro-64" border="0"/>
              </button>
              <div className={style.lineas}></div>
              <button className={style.botonesArmado} onClick={() => componentsHandler('fuente')}>
                <img src="https://i.ibb.co/DVm3BTv/icons8-power-supply-62.png" alt="icons8-power-supply-62" border="0"/>
              </button>
            </div>
            <hr />
            <div className={style.cardConteiner}>
              {allComponents.map(component => (
              <div className={style.card} key={component.modelo}>
              <h1 onClick={() => addToComputer(component)}>{component.modelo}</h1>
              <h3>{component.precio} $</h3>
            </div>
        ))}
      </div>
      <div>
        <hr />
        {computer.length > 0 && (
          <div>
            <h2>Componentes seleccionados:</h2>
            {computer.map((component) => (
              <div key={component.id}>
                <button onClick={() => removeFromComputer(component)}>Eliminar</button>
                <h3>{component.modelo}</h3>
              </div>
            ))}
          </div>
            )}
            <h2>total: {total} $</h2> 
          </div>
        </div>
    );
};

export default Form
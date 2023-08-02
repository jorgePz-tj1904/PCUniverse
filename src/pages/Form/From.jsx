import React, { useState } from "react";
import { componentes } from "./componentes";
import { useEffect } from "react";

const Form = () => {
  const [componentsToShow, setComponentsToShow] = useState([]);
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
  setComponentsToShow(componentes.cpus)
},[]);

  const componentsHandler = (event) => {
    const componente = event.target.value.toLowerCase();
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
//////////////cambiar component por component.id
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
        <div>
            <h1>Arma tu pc</h1>
            <p>Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.</p>
            <div>
                <button onClick={componentsHandler} value='procesador'>procesador</button>
                <button onClick={componentsHandler} value='mother'>mother</button>
                <button onClick={componentsHandler} value='ram'>ram</button>
                <button onClick={componentsHandler} value='grafica'>grafica</button>
                <button onClick={componentsHandler} value='disco'>disco</button>
                <button onClick={componentsHandler} value='fuente'>fuente</button>
            </div>
            <div>
              {componentsToShow.map(component => (
              <div key={component.modelo}>
              <h1 onClick={() => addToComputer(component)}>{component.modelo}</h1>
            </div>
        ))}
        <hr />
      </div>
      <div>
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
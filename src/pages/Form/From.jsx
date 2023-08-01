import { useState } from "react";
import { cpus, rams, mothers, graficas, discos, fuentes} from "./componentes";

const Form=()=>{
    const [componentsToShow , setComponentsToShow] =useState([]);
    const [cpu, setCpu]= useState(cpus);
    const [ram, setRam]= useState(rams);
    const [mother, setMother] =useState(mothers);
    const [grafica, setGrafica]= useState(graficas);
    const [disco, setDisco]= useState(discos);
    const [fuente, setFuente]= useState(fuentes);


    const [computer, setComputer] = useState([])

      const componentsHandler = (event) => {
        const componente = event.target.value.toLowerCase();
        switch (componente) {
            case 'procesador':
                return setComponentsToShow(cpu);
            case 'mother':
                return setComponentsToShow(mother);
            case 'ram':
                return setComponentsToShow(ram);
            case 'grafica':
                return setComponentsToShow(grafica);
            case 'disco':
                return setComponentsToShow(disco);
            case 'fuente':
                return setComponentsToShow(fuente);
            default:
                break;
        }
      }
      const addToComputer = (component) => {
        setComputer([...computer, component]);
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
                {componentsToShow.map(component=>(<div><h1 onClick={()=>addToComputer(component)}>{component.modelo}</h1></div>))}
                <hr />
            </div>
            <div>
            {computer.length > 0 && (
               <div>
                <h2>Componentes seleccionados:</h2>
                {computer.map((component, index) => (
                  <div key={index}>
                    <h3>{component.modelo}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    );
};

export default Form
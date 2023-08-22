import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { applyPriceOrder, filterProductsByCategory, getAllComponents} from '../../redux/actions';
import './Cards.css';

const Cards = () => {
  const componentsPerPage = 8; // Cantidad de componentes por página
  const [currentPage, setCurrentPage] = useState(1);
///
  const components = useSelector((state) => state.allComponents);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();


  useEffect(()=> {
  dispatch(getAllComponents());
  }, []);
  ///////
  const priceOrderDirection = useSelector((state) => state.priceOrderDirection);
  const handlePriceOrderChange = (order) => {
    dispatch(applyPriceOrder(order));
  };
///////
  const lastComponentIndex = currentPage * componentsPerPage;
  const firstComponentIndex = lastComponentIndex - componentsPerPage;
  const componentsToShow = components.slice(firstComponentIndex, lastComponentIndex);

  const totalPages = Math.ceil(components.length / componentsPerPage);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
function handleFilterStatus(e) {
  dispatch(filterProductsByCategory(e.target.value))
}

  return (
    <div>
      <div className="cards-container">
        <div className="filters">
          <div>
            <label>Ordenar por precio:</label>
            <div className='select-container'>
            <select className='select-box' value={priceOrderDirection} onChange={(e) => handlePriceOrderChange(e.target.value)}>
              <option value="asc">Menor Precio</option>
              <option value="desc">Mayor Precio</option>
            </select>
            </div>
          </div>
          <div>
          <label>Filtrar por categoría:</label>
          <div className='select-container'>
        <select className='select-box' name='categoria' onChange={e => handleFilterStatus(e)}>
          <option value="todos">Todas las categorías</option>
          <option value="gabinete">Gabinete</option>
          <option value="memoria ram">Memoria ram</option>
          <option value="placa grafica">Placa grafica</option>
          <option value="monitor">Monitor</option>
          <option value="disco">Disco</option>
          <option value="fuente de poder">Fuente de poder</option>
          <option value="procesador">Procesador</option>
          <option value="placa madre">Placa madre</option>
          <option value="refrigeracion">Refrigeracion</option>
          <option value="periferico">Periferico</option>
        </select>
        </div>
        </div>
      </div>

      <div className="cards">
        {componentsToShow.map(({ img, modelo, precio, tipo, id }) => (
          <div className='cards-c' key={id}>
            <Card
              id={id}
              img={img}
              modelo={modelo}
              precio={precio}
              tipo={tipo}
            />
          </div>
        ))}
      </div>
    </div>
      <div className='pagination'>
        <button className='button' onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          <span className='text'>Anterior</span>
        </button>
        <div className='page-numbers'>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div >
        <button className='button' onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          <span className='text'>Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
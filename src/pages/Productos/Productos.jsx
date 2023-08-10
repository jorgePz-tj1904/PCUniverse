import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponents } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import style from './Productos.module.css'

const Productos = () => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.allComponentsP);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getComponents(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Cards components={components} />
      <div>
        <button className={style.next} onClick={handleNextPage}>Next</button>
      </div>
      <div>

        <button className={style.back} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
      </div>
      <footer className="footer">
      <p>Si tenés sugerencias o comentarios</p>
      <a href="/contactanos">Contactanos</a>
      <p>© 2023 PC Universe. Todos los derechos reservados.</p>
    </footer>
    </div>
  );
};

export default Productos;
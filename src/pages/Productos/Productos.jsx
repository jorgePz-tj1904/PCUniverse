// import React from 'react'
// import Cards from '../../components/Cards/Cards'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getComponents } from '../../redux/actions';
// const Productos = () => {
//     const dispatch = useDispatch();
//   const components = useSelector((state) => state.allComponents);

//   useEffect(() => {
//     dispatch(getComponents());
//   }, [dispatch]);


//   return (
//     <Cards components={components} />
//   )
// }

// export default Productos
////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComponents } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import style from './Productos.module.css'

const Productos = () => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.allComponents);

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
      <div className={style.botones}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Productos;


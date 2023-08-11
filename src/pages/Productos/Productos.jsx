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
import  Pagination  from "../../components/Paginado/Paginado";

const Productos = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getComponents(currentPage));
  }, [dispatch,currentPage]);

  const handlePageChange = (newPage)=>{
    setCurrentPage(newPage)
  }

 

  return (
    <div>
      <Cards  />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
  }
export default Productos;


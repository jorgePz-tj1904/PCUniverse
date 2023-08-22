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
import React from 'react';
import Cards from '../../components/Cards/Cards';


const Productos = () => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export default Productos;


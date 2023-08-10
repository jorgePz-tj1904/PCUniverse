import { getAllPc } from "../../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './builds.module.css'

const Builds = () => {
  const [builds, setBuilds] = useState([]);
  const pc = useSelector((state) => state.pcFinals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPc());
    getBuilds();
  }, []);

  const getBuilds = () => {
    const buildsArray = [];
    for (const buildData of pc) {
      const build = [];

      for (let i = 0; i < buildData.componenteId.length; i++) {
        build.push({
          id: buildData.componenteId[i],
          modelo: buildData.modelo[i],
          img: buildData.img[i],
          precio: buildData.precio[i],
        });
      }
      const precioTotal = buildData.precio_total; // Corrección aquí

      build.push({ precioTotal });

      buildsArray.push(build);
    }

    setBuilds(buildsArray);
  };

  return (
    <div className={style.conteiner}>
      <button onClick={() => getBuilds()}>Obtener Builds</button>
      <div className={style.BuildsConteiner}>
        {builds.map((pc, index) => (
          <div className={style.cardBuild} key={index}>
            {pc.map((componente, compIndex) => (
              <div key={compIndex}>
                <p>{componente.modelo}</p>
                {compIndex === pc.length - 1 && <h2>Precio: {componente.precioTotal} $</h2>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Builds;

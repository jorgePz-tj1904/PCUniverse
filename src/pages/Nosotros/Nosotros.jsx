import style from './Nosotros.module.css'
import rodri from '../../images/Rodrigo.jpg'
import pablo from '../../images/pablo.jpg'
import juani from '../../images/juani.jpg'
import mateo from '../../images/mateo.jpg'
// import lauty from '../../images/lauty.jpg'
import edu from '../../images/edu.jpg'
import jorge from '../../images/jorge.jpg'
import { NavLink } from 'react-router-dom'

import React from 'react'

const Nosotros = () => {
  return (
    <div>
      <h1 className={style.title}>Nuestro equipo</h1>
      <div className={style.cards}>
      <div className={style.cardRodry}>
        <img className={style.imgRo} src={rodri}></img>
        <h2 className={style.nombre}>Rodrigo Alejandro Perez</h2>
        <p>FullStack Developer</p>
        <p>Team: Frontend</p>
        <a className={style.linkedin} href="https://www.linkedin.com/in/rodrigoperez03/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
        <a className={style.github} href='https://github.com/roodry03' target='_BLANK'><i class='bx bxl-github'></i></a>
      </div>
            <div className={style.cardRodry}>
              <img className={style.imgRo}></img>
              <h2 className={style.nombre}>Santiago Lautaro Sarife</h2>
              <p>FullStack Developer</p>
              <p>Team: Frontend</p>
              <a className={style.linkedin} href="https://www.linkedin.com/in/rodrigoperez03/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
              <a className={style.github} href='https://github.com/roodry03' target='_BLANK'><i class='bx bxl-github'></i></a>
            </div>
                <div className={style.cardRodry}>
                  <img className={style.imgRo} src={juani}></img>
                  <h2 className={style.nombre}>Juan Ignacio Payeres Haidar</h2>
                  <p>FullStack Developer</p>
                  <p>Team: Frontend</p>
                  <a className={style.linkedin} href="https://www.linkedin.com/in/juanihaidar/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
                  <a className={style.github} href='https://github.com/Juanihaidar21' target='_BLANK'><i class='bx bxl-github'></i></a>
                </div>
                    <div className={style.cardRodry}>
                      <img className={style.imgRo} src={jorge}></img>
                      <h2 className={style.nombre}>Jorge Leonel Perez Tichij</h2>
                      <p>FullStack Developer</p>
                      <p>Team: Frontend</p>
                      <a className={style.linkedin} href="https://www.linkedin.com/in/jorge-perez-tichij-38a15523b/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
                      <a className={style.github} href='https://github.com/jorgePz-tj1904' target='_BLANK'><i class='bx bxl-github'></i></a>
                    </div>
                        <div className={style.cardRodry}>
                          <img className={style.imgRo} src={edu}></img>
                          <h2 className={style.nombre}>Eduardo Enrique Valencia</h2>
                          <p>FullStack Developer</p>
                          <p>Team: Backend</p>
                          <a className={style.linkedin} href="https://www.linkedin.com/in/rodrigoperez03/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
                          <a className={style.github} href='https://github.com/roodry03' target='_BLANK'><i class='bx bxl-github'></i></a>
                        </div>
                                <div className={style.cardRodry}>
                                  <img className={style.imgRo} src={pablo}></img>
                                  <h2 className={style.nombre}>Pablo Nazareno Perez</h2>
                                  <p>FullStack Developer</p>
                                  <p>Team: Backend</p>
                                  <a className={style.linkedin} href="https://www.linkedin.com/in/pablo-perez-408433265/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
                                  <a className={style.github} href='https://github.com/pablo-prz' target='_BLANK'><i class='bx bxl-github'></i></a>
                                </div>
                                    <div className={style.cardRodry}>
                                      <img className={style.imgRo} src={mateo}></img>
                                      <h2 className={style.nombre}>Mateo Federico Medina Krilich</h2>
                                      <p>FullStack Developer</p>
                                      <p>Team: Backend</p>
                                      <a className={style.linkedin} href="https://www.linkedin.com/in/mateo-federico-medina-krilich/" target='_BLANK'> <i class='bx bxl-linkedin-square'></i></a>
                                      <a className={style.github} href='https://github.com/huevexxxx' target='_BLANK'><i class='bx bxl-github'></i></a>
                                    </div>
        </div>
      <NavLink className={style.back} to='/'>
        Back
      </NavLink>
            <footer className="footer">
            <p>Si tenés sugerencias o comentarios</p>
            <NavLink to="/contactanos">Contactanos</NavLink>
            <p>© 2023 PC Universe. Todos los derechos reservados.</p>
          </footer>
    </div>
  )
}

export default Nosotros;

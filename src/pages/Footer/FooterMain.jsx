import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.contact}>
        <footer className={style.footer}>
    <p>Si tenés sugerencias o comentarios</p>
    <a href="/contactanos">Contactanos</a>
    <p>© 2023 PC Universe. Todos los derechos reservados.</p>
  </footer>
  </div>
  )
}

export default Footer
import React from 'react';
import Slider from 'react-slick';
import logo from "../../assets/logo.png";
import './styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    const Footer = () => {
        const handleGoToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
    
  return (
    <div>
      {/* Barra de navegación superior */}
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
          <i class='bx bx-search-alt'></i>
      </div>
      <button className="navbar-button">
        <i class='bx bxs-cart'></i>
      </button>
      <button className="navbar-button">
      <i class='bx bxs-log-in'></i>
      </button>
        {/* Agrega aquí el formulario de inicio de sesión */}
      </div>

      {/* Barra de navegación */}
      <nav className="main-nav">
        <ul>
          <li><a href="#">PRODUCTOS</a></li>
          <li><a href="#">ARMÁ TU PC</a></li>
          <li><a href="#">AYUDA</a></li>
          <li><a href="#">CONTACTANOS</a></li>
          <li><a href="#">OFERTAS</a></li>
          <li><a href="#">¿QUIENES SOMOS?</a></li>
        </ul>
      </nav>
      <div className="carousel-container">
        <Slider {...settings}>
          {/* Imagen 1 */}
          <div>
            <img src={foto1} alt="Imagen 1" />
          </div>
          {/* Imagen 2 */}
          <div>
            <img src={foto2} alt="Imagen 2" />
          </div>
          {/* Imagen 3 */}
          <div>
            <img src={foto3} alt="Imagen 2" />
          </div>
          {/* Imagen 4 */}
          <div>
            <img src={foto4} alt="Imagen 2" />
          </div>
          {/* Imagen 5 */}
          <div>
            <img src={foto5} alt="Imagen 2" />
          </div>
        </Slider>
      </div>

      <div className="content">
        <h2>ULTIMAS NOVEDADES</h2>
        <hr className="divider" />
        {/* Cards con las imágenes */}
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36811_Silla_Gamer_Corsair_T3_Rush_Fabric_Carbon_88bef6b4-grn.jpg" alt="Silla Gamer" />
            <h3>Silla Gamer Corsair T3 Rush Fabric Carbon</h3>
            <p>Precio: $XXX</p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg" alt="Procesador AMD Ryzen 3 3200G" />
            <h3>Procesador AMD Ryzen 3 3200G</h3>
            <p>Precio: $XXX</p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34993_Fuente_Be_Quiet_1000W_80_Plus_Gold_PURE_POWER_11_Full_Modular_3d25f718-grn.jpg" alt="Fuente Be Quiet 1000W 80 Plus Gold PURE POWER 11 Full Modular" />
            <h3>Fuente Be Quiet 1000W 80 Plus Gold PURE POWER 11 Full Modular</h3>
            <p>Precio: $XXX</p>
          </div>
          {/* Card 4 */}
          <div className="card">
            <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35714_Gabinete_Antec_NX292_MESH_RGB_Vidrio_Templado_a017a79f-grn.jpg" alt="Gabinete Antec NX292 MESH RGB Vidrio Templado" />
            <h3>Gabinete Antec NX292 MESH RGB Vidrio Templado</h3>
            <p>Precio: $XXX</p>
          </div>
        </div>

        {/* Carrusel */}
        <footer className="footer">
      <p>Si tenés sugerencias o comentarios</p>
      <a href="/contactanos">Contactanos</a>
      <p>© 2023 PC Universe. Todos los derechos reservados.</p>
    </footer>
      </div>
      </div>
  );
};

export default Home;

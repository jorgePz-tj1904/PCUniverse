import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComponents } from '../../redux/actions';
import Slider from 'react-slick';
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from "../../assets/foto1.jpeg";
import foto2 from "../../assets/foto2.jpeg";
import foto3 from "../../assets/foto3.jpeg";
import foto4 from "../../assets/foto4.jpeg";
import foto5 from "../../assets/foto5.jpeg";
import FooterMain from '../Footer/FooterMain';
import Card from "../../components/Card/Card";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    _autoplay: true,
    get autoplay() {
      return this._autoplay;
    },
    set autoplay(value) {
      this._autoplay = value;
    },
    autoplaySpeed: 3000,
  };
  
  const components = useSelector(state => state.allComponents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComponents());
  }, [dispatch]);

  // Filtrar solo los componentes de la categoría 'perifericos'
  const selectedPeripherals = components.filter(component => component.categoria === 'periferico');

  return (
    <div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={foto1} alt="Imagen 1" />
          </div>
          <div>
            <img src={foto2} alt="Imagen 2" />
          </div>
          <div>
            <img src={foto3} alt="Imagen 3" />
          </div>
          <div>
            <img src={foto4} alt="Imagen 4" />
          </div>
          <div>
            <img src={foto5} alt="Imagen 5" />
          </div>
        </Slider>
      </div>
      <div className="cards-container">
        {selectedPeripherals.slice(0, 4).map(({ img, modelo, precio, categoria, id }) => (
          <div className='cards-c' key={id}>
            <Card
              id={id}
              img={img}
              modelo={modelo}
              precio={precio}
              categoria={categoria}
            />
          </div>
        ))}
      </div>
      <FooterMain />
    </div>
  );
};

export default Home;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComponents } from '../../redux/actions';
import Slider from 'react-slick';
import './styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foto1 from "../../assets/foto1.jpeg"
import foto2 from "../../assets/foto1.jpeg"
import foto3 from "../../assets/foto1.jpeg"
import foto4 from "../../assets/foto1.jpeg"
import foto5 from "../../assets/foto1.jpeg"
import FooterMain from '../Footer/FooterMain';
import Card from "../../components/Card/Card";
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);
  useEffect(() => {
    if (isAuthenticated) {
      const userData = {
        email: user.email,
        name: user.given_name,
        last_name: user.family_name,
      };

      const sendUserDataToBackend = async () => {
        try {
          const response = await axios.post(
            "http://localhost:3001/signupauth0",
            userData
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      sendUserDataToBackend();
    }
  }, [isAuthenticated, user]);



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
    </div>
  );
};

export default Home;
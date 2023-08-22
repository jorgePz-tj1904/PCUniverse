import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoginForm from '../../pages/Login/LoginForm';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loged, setLoged]=useState(false);
  const [admin, setAdmin] = useState(false);
  const { logout } = useAuth0();

  useEffect(() => {
    changeLogin();
    loginHandle();
  }, []);

  const changeLogin=async()=>{
    const storedValue  = await localStorage.getItem('login');
    const isUserLoggedIn = storedValue === 'true';
    setLoged(isUserLoggedIn);
  }

  const handleLoginButtonClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const loginHandle = async () => {
    const usuarioJSON = localStorage.getItem('usuario');
    if (usuarioJSON) {
      setLoged(true);
    }
    const usuario = await JSON.parse(usuarioJSON);
    console.log(usuario);
    console.log(usuario.email);
    if (usuario.email === 'somospixis123@gmail.com') {
      setAdmin(true);
      setLoged(true);
    }
  }
  // const logOut = () => {
  //   logout({ returnTo: window.location.origin })
  //   localStorage.removeItem('usuario');
  //   setLoged(false);
  //   setAdmin(false);
  // }

  return (
    <div>
      <link
        href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        rel='stylesheet'
      ></link>
      <div className={style.navbar}>
        <NavLink to={'/'}>
          <img src={logo} alt="Logo" className={style.logo} />
        </NavLink>
        <SearchBar/> 

        {!loged&&<button id={style.iniciarSesion} className={style.botones} onClick={handleLoginButtonClick}><i class='bx bxs-log-out'></i>iniciar sesion</button>}

        {loged ? <><button className={style.botones} onClick={() => {logout ({returnTo: window.location.origin}); localStorage.removeItem('usuario'); localStorage.removeItem('login');}}>
        cerrar sesion <i class='bx bxs-log-out'></i></button></>:
        <></>}

        <NavLink id={style.carrito} to='/carrito'>
            <i className='bx bxs-cart'></i>
        </NavLink>
      </div>

      <nav className={style.mainNav}>
        <ul>
          <li><NavLink to='/componentes'>PRODUCTOS</NavLink></li>
          <li><NavLink to='/form'>ARMA TU PC</NavLink></li>
          <li><NavLink to='/ayuda'>AYUDA</NavLink></li>
          <li><NavLink to='/contactanos'>CONTACTANOS</NavLink></li>
          <li><NavLink to='/nosotros'>¿QUIENES SOMOS?</NavLink></li>
          <li><NavLink to='/pcs'>BUILDS</NavLink></li>
          {admin ? <li><NavLink to='/admin'>PANEL DE CONTROL</NavLink></li> : null}
        </ul>
      </nav>

      {showLoginForm && (
        <div className={style.loginOverlay}>
          <div className={style.loginContainer}>
            <LoginForm setShowLoginForm={setShowLoginForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


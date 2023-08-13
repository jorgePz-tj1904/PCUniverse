import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { NavLink } from 'react-router-dom';

function LoginForm({ setShowLoginForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con:', email, password);
    // 
    //

    // 
    setShowLoginForm(false);
  };

  const handleClose = () => {
    setShowLoginForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false); // Cierra el formulario de inicio de sesión al hacer clic en "regístrate aquí"
  };

  
  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        <h2 className={styles.loginHeading}>Iniciar sesión</h2>
        <h3 className={styles.loginText}>Para ingresar hacelo con tu email y una contraseña</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder='example@example.com'
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder='Contraseña'
            />
            <h4 className={styles.loginTexting}>
              Si aún no tienes una cuenta,{' '}
              <NavLink to="/registration" className={styles.registerLink}
               onClick={handleRegisterClick}>
              regístrate aquí
              </NavLink>
              </h4>
          </div>
          <button type="submit" className={styles.loginButton}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
  }
  export default LoginForm;
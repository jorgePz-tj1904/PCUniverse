import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './RegistrationForm.module.css';

function RegistroFormulario() {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [birthdate, setBirthdate] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState(''); // Agregado
  const [lastNameError, setLastNameError] = useState(''); // Agregado
  const [cityError, setCityError] = useState(''); // Agregado

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de la contraseña
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      setPasswordError(
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un carácter especial.'
      );
      return;
    }

    // Validaciones para nombre, apellido y ciudad
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(firstName)) {
      setFirstNameError('El nombre debe contener solo letras.');
      return;
    }

    if (!nameRegex.test(lastName)) {
      setLastNameError('El apellido debe contener solo letras.');
      return;
    }

    if (!nameRegex.test(city)) {
      setCityError('La ciudad debe contener solo letras.');
      return;
    }

    // Lógica para registrar al usuario
    console.log('Registrarse con:', firstName, lastName, city, postalCode, birthdate);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registrationForm}>
      <h2 className={styles.formTitle}>Sign in</h2>
      <div className={`${styles.card} ${styles.focusedContainer}`}>
        {/* Agregar sección de motivos para registrarse */}
        <div className={styles.whyRegister}>
          <h3>¿Por qué debería registrarme?</h3>
            <h4>Para efectuar una compra en PC Universe es necesario el registro, así como datos de pago para una mayor seguridad.</h4>
            <h4>Recomendamos registrarse también para poder hacer una review escrita de los productos vendidos.</h4>
            <h4>Registrándote en PC Universe, vas a tener descuentos en productos destacados.</h4>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input1} input`}
            placeholder="Elige una contraseña, con una mayuscula y 2 numeros"
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.inlineForm}`}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Apellido"
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.inlineForm}`}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Ciudad"
            required
          />
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Código postal"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}></label>
          <DatePicker
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
            dateFormat="dd/MM/yyyy"
            className={styles.datePicker}
            placeholderText="   Fecha de nacimiento"
            required
          />
        </div>
        <div className={styles.submitContainer}>
          <button type="submit" className={`${styles.button} ${styles.submitButton} input`}>
            Registrarse
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegistroFormulario;
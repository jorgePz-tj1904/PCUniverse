import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions";

function RegistroFormulario() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState(""); // Agregado
  const [lastNameError, setLastNameError] = useState(""); // Agregado
  const [cityError, setCityError] = useState(""); // Agregado

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        // Realiza la redirección después de 3 segundos
        window.location.href = "/componentes";
      }, 1000);
    }
  }, [isRegistered]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("usuario",JSON.stringify({ email: email, password: password }));
    localStorage.setItem('login', true)
    // Lógica para registrar al usuario
    const userData = {
      name: firstName,
      last_name: lastName,
      email,
      password,
      city,
      postal_code: postalCode,
      date_of_birth: birthdate,
    };
    console.log(userData);
    try {
      dispatch(registerUser(userData));
      setIsRegistered(true);
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registrationForm}>
      <h2 className={styles.formTitle}>Sign in</h2>
      <div className={`${styles.card} ${styles.focusedContainer}`}>
        {/* Agregar sección de motivos para registrarse */}
        <div className={styles.whyRegister}>
          <h3>¿Por qué debería registrarme?</h3>
          <h4>
            Para efectuar una compra en PC Universe es necesario el registro,
            así como datos de pago para una mayor seguridad.
          </h4>
          <h4>
            Recomendamos registrarse también para poder hacer una review escrita
            de los productos vendidos.
          </h4>
          <h4>
            Registrándote en PC Universe, vas a tener descuentos en productos
            destacados.
          </h4>
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
            placeholderText="  Fecha de nacimiento"
            required
          />
        </div>
        <div className={styles.submitContainer}>
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${styles.button} ${styles.submitButton} input`}
          >
            Registrarse
          </button>
        </div>
        {isRegistered && (
          <p className={styles.registrationSuccess}>
            Usuario creado exitosamente.
          </p>
        )}
      </div>
    </form>
  );
}

export default RegistroFormulario;

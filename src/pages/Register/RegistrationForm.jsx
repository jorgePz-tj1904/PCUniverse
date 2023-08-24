import React, { useState, useEffect } from "react";
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
  const [birthdateText, setBirthdateText] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        window.location.href = "/componentes";
      }, 1000);
    }
  }, [isRegistered]);

  localStorage.setItem("usuario",JSON.stringify({ email: email, password: password }));
  localStorage.setItem('login', true)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    setPasswordError("");
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setCityError("");
    setPostalCodeError("");
    setBirthdateError("");

    if (password.length < 8 || password.length > 15) {
      setPasswordError("La contraseña debe tener al menos 1 mayúscula, 1 número y entre 8 y 15 caracteres.");
      isValid = false;
    }

    if (firstName.length > 15 || firstName.trim() === "") {
      setFirstNameError("El nombre debe tener un máximo de 15 letras.");
      isValid = false;
    }

    if (lastName.length > 15 || lastName.trim() === "") {
      setLastNameError("El apellido debe tener un máximo de 15 letras.");
      isValid = false;
    }

    if (!email.includes("@") || !email.includes(".com") || email.trim() === "") {
      setEmailError("Ingresa un correo electrónico válido.");
      isValid = false;
    }

    if (city.trim() === "") {
      setCityError("Ingresa una ciudad válida.");
      isValid = false;
    }

    if (postalCode.length !== 4 || postalCode.trim() === "") {
      setPostalCodeError("El código postal debe tener 4 dígitos.");
      isValid = false;
    }

    const minBirthdate = new Date("2005-01-01");
    const userBirthdate = new Date(birthdateText);
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

    if (userBirthdate >= minBirthdate) {
      setBirthdateError("Debes haber nacido antes de 2005.");
      isValid = false;
    } else if (userBirthdate >= eighteenYearsAgo) {
      setBirthdateError("Debes tener al menos 18 años para registrarte.");
      isValid = false;
    }

    if (isValid) {
      const userData = {
        name: firstName,
        last_name: lastName,
        email,
        password,
        city,
        postal_code: postalCode,
        date_of_birth: userBirthdate,
      };

      try {
        dispatch(registerUser(userData));
        setIsRegistered(true);
      } catch (error) {
        console.error("Error en el registro:", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.registrationForm}>
      <h2 className={styles.formTitle}>Sign in</h2>
      <div className={`${styles.card} ${styles.focusedContainer}`}>
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
        <div className={`${styles.formGroup} ${styles.inlineForm}`}>
          <label className={styles.label}></label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input1} input`}
            placeholder="Elige una contraseña, con una mayuscula y 2 numeros"
            required
          />
          {passwordError && <p className={styles.error}>{passwordError}</p>}
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
          {firstNameError && <p className={styles.error}>{firstNameError}</p>}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Apellido"
            required
          />
           {lastNameError && <p className={styles.error}>{lastNameError}</p>}
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
          {cityError && <p className={styles.error}>{cityError}</p>}
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Código postal"
            required
          />
          {postalCodeError && <p className={styles.error}>{postalCodeError}</p>}
        </div>
        <div className={`${styles.formGroup} ${styles.inlineForm}`}>
          <label className={styles.label}></label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} input`}
            placeholder="Email"
            required
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
        </div>
        <div className={`${styles.formGroup} ${styles.inlineForm}`}>
          <label className={styles.label}></label>
          <input
            type="date"
            value={birthdateText}
            onChange={(e) => {
              setBirthdateText(e.target.value);
              setBirthdateError(""); // Clear the error when the input changes
            }}
            className={`${styles.input} input`}
            placeholder="Fecha de nacimiento"
            required
          />
          {birthdateError && (
            <p className={styles.error}>{birthdateError}</p>
          )}
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
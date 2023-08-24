import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacto.css'

export default function Contacto() {
  const [error, setError] = useState({});
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const errors = {
      name: !userData.from_name,
      email: !userData.to_email,
      message: !userData.message,
    };
    setError(errors);
    const hasError = Object.values(errors).some(Boolean);
    if (hasError) {
      return;
    }

    const YOUR_SERVICE_ID = 'service_0vbn9wl';
    const YOUR_TEMPLATE_ID = 'template_nr0fnf9';
    const YOUR_PUBLIC_KEY = 'erNBeGxcfC05pyFCU';

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
        setIsSent(true);
        showSuccessMessage();
      })
      .catch((error) => {
        console.log(error.text);
        setIsSent(false);
        showErrorMessage();
      });

    setUserData({
      from_name: '',
      to_email: '',
      message: '',
    });
  };

  const [isSent, setIsSent] = useState(false);

  const [userData, setUserData] = useState({
    from_name: '',
    to_email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(error);
  return (
    <div className='conteinerContactanos'>
      <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="heading">Queremos saber tu opinion</h2>
        <h6 className="italic">¡Aceptamos criticas constructivas para mejorar nuestro servicio!</h6>
        <div>
          <h4 className="name" htmlFor="name">Your name: </h4>
          <input
            className={`${error.name ? 'border-red-500' : ''}`}
            id="name"
            name="from_name"
            value={userData.from_name}
            onChange={handleChange}
            type="text"
            placeholder="Fist name and second name"
          />
        </div>
        <div>
          <h4 className="name" htmlFor="email">Email address </h4>
          <input
            className={`${error.email ? 'border-red-500' : ''}`}
            id="email"
            name="to_email"
            value={userData.to_email}
            onChange={handleChange}
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div>
          <h4 className="name" htmlFor="message">Message</h4>
          <textarea
            className={`${error.message ? 'border-red-500' : ''}`}
            id="message"
            name="message"
            value={userData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Your message"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}
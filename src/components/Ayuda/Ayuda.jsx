// Ayuda.js
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './ayuda.module.css'; // Importa los estilos CSS

const Ayuda = () => {
  // Estado para controlar la expansión de cada caja
  const [expandedBox, setExpandedBox] = useState(null);

  // Función para manejar el clic en una caja
  const handleBoxClick = (index) => {
    if (expandedBox === index) {
      // Si ya está expandida, ciérrala al hacer clic nuevamente
      setExpandedBox(null);
    } else {
      // Si no está expandida, abrirla
      setExpandedBox(index);
    }
  };

  return (
    <div className={styles['ayuda-container']}>
      <h1>Preguntas frecuentes</h1>
      {/* Mapear las preguntas y respuestas y aplicar estilos */}
      {preguntas.map((pregunta, index) => (
        <div
          key={index}
          className={`${styles['ayuda-box']} ${expandedBox === index ? styles['expanded'] : ''}`}
          onClick={() => handleBoxClick(index)}
        >
          {/* Título */}
          <h3>
            <span className={styles['question']}>{pregunta.titulo}</span>
            {/* Flecha hacia abajo */}
            <i
              className={`bx bx-chevron-down ${expandedBox === index ? styles['rotated'] : ''}`}
            ></i>
          </h3>

          {/* Pregunta */}
          {expandedBox === index && <p className={styles['question-text']}>{pregunta.pregunta}</p>}

          {/* Mostrar el contenido solo si está expandido */}
          {expandedBox === index && (
            <div className={styles['ayuda-content']}>
              {/* Respuesta */}
              <p>{pregunta.respuesta}</p>
            </div>
          )}
        </div>
      ))}

      {/* Caja adicional */}
      <div className={`${styles['ayuda-box']} ${styles['additional-box']}`}>
        <h3>
          PC Universe te ayuda. ¿Cuál es tu consulta?
        </h3>
        <p>
        </p>
        {/* Contenido adicional */}
        {expandedBox === null && (
          <div className={styles['log-box']}>
          <NavLink to="/login" className={styles.navLink} style={{ textDecoration: 'none' }}>
            <span onClick={() => handleBoxClick(null)}>
              <i className='bx bxs-user'></i>
            </span>
            <span className={styles.linkText}>Iniciar Sesión</span>
          </NavLink>
        </div>
        )}
      </div>
    </div>
  );
};

// Datos de ejemplo para las preguntas y respuestas
const preguntas = [
  {
    titulo: 'Realizar un pedido',
    pregunta: '¿Cómo realizo un pedido?',
    respuesta: 'Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y podés acceder como cliente (si ya tenés cuenta en PC Universe) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado con los detalles del pedido realizado.',
  },
  {
    titulo: 'Precio',
    pregunta: '¿El precio que figura en la web es el precio final?',
    respuesta: 'Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.',
  },
  {
    titulo: 'Formas de pago',
    pregunta: '¿Cuáles son las formas de pago disponibles?',
    respuesta: 'Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos: (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.',
  },
  {
    titulo: 'Deposito - Transferencia bancaria',
    pregunta: '¿Cómo abono a través de depósito/transferencia?',
    respuesta: 'Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva.',
  },
  {
    titulo: 'Mercadopago',
    pregunta: '¿Cómo puedo abonar a través de MercadoPago?',
    respuesta: 'Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.',
  },
  {
    titulo: 'Envios',
    pregunta: '¿Cómo gestiono el envío de mi pedido?',
    respuesta: 'En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de PC Universe. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.',
  },
  
  // Agrega más preguntas y respuestas aquí
];

export default Ayuda;

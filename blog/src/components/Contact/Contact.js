import React, { useRef } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_25tuoo3', 'template_20a4b6c', form.current, 'JvLRSyuJg6PybVvii')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success('Mensaje enviado', { autoClose: 3000 });
        },
        (error) => {
          console.log(error.text);
          toast.error('Error al enviar el mensaje', { autoClose: 3000 });
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">¿Tienes una idea?</h1>
      {/* <span className="contactDesc">¡Cuéntamela!</span> */}
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Tu nombre" name="your_name" />
        <input type="email" className="email" placeholder="Tu email" name="your_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Tu mensaje"></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Enviar
        </button>
       
      </form>
    </div>
  );
};

export default Contact;

import './Contact.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e355cf91-fba0-4187-aeb5-b320b8219028");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Gracias!",
          text: "Mensaje Enviado",
          icon: "success"
        })
        navigate('/')
      }
    }
    
  return (
    <section className="contact">
      <form className="form" onSubmit={onSubmit}>
        <h2 className='contactName'>Contáctanos</h2>
        <div className="input-box">
          <label>Nombre Completo</label>
          <input type="text" className="field" placeholder="Escribe tu nombre" name='name' required/>
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" className="field" placeholder="Escribe tu email" name='email' required/>
        </div>
        <div className="input-box">
          <label>Mensaje</label>
          <textarea name="message" id="" className="field mess" placeholder='Escribe tu mensaje' required></textarea>
        </div>
        <button className="button" type="submit"> Enviar mensaje </button>
      </form>
    </section>
   
  )
}

export default Contact
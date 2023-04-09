import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' style={{flex:"0 0 46%"}}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
          <form className='shadow' style={{flex:"0 0 46%",height:"100%"}}>
          <h4>Physical contact</h4> <br />
            JSLP Risk Consulting Group SARL, 165 rue de l'Entente <br />
            07 B.P. 12706, Lomé, Togo
            <br />
            Tél: <a href="tel:+228 22 20 36 17" style={{color:"var(--primary-color)"}}>+228 22 20 36 17</a>
            <br /><br />
            Ou nous écrire directement à <a href="mailto:info@jslpconsulting.com" style={{textTransform:"lowercase",color:"var(--primary-color)"}}>info@jslpconsulting.com</a>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

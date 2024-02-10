import { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { Navbar } from '../../components';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ql69zng', 'template_t7yzkmm', form.current, 'l3OwPxegox5ZeEZKX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.traget.reset();
    };

    return (
        <div id='contact' className='contact'>
            <h5>Get in touch </h5>
            <h2>Contact</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sachingavali1920@gmail.com</h5>
                        <a href="milto:sachingavali1920@gmail.com" target='_blank' rel="noreferrer"  > Send a massage </a>
                    </article>
                    <article className="contact__option">
                        <FaInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>sachin__gavali</h5>
                        <a href="https://ig.me/m/sachin__gavali" target='_blank' rel="noreferrer" > Send a massage </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whats App </h4>
                        <h5>91+ 9067339470</h5>
                        <a href="https://api.whatsapp.com/send?phone=+919067339470" target='_blank' rel="noreferrer" > Send a massage </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name...' required />
                    <input type="email" name='email' placeholder='Your Email...' required />
                    <textarea name="massage" id="massage" rows="7" placeholder='Your Massage' required>

                    </textarea>
                    <button type="submit" className='btn btn-primary'>Send Massage </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
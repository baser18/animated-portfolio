import "./contact.scss";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";

const variants ={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i2mwhul', 'template_c7az41r', formRef.current, {
        publicKey: 'VliAqVSBtFBd_es2f',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets work together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>emily@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Number</h2>
            <span>+44 54856321</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name"/>
            <input type="email" required placeholder="Email" name="email"/>
            <textarea rows={10} placeholder="Message" name="message"/>
            <button type="submit" value="Send">Submit</button>
            {error && "error"}
            {success && "Your message has been sent!"}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact

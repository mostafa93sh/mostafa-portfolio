import { useState } from "react";
import "./Contacts.scss";

export default function Contacts() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className='contacts' id='contacts'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contacts</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='your email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you , We will reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
}

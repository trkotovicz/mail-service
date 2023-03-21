import { useState } from 'react';
import './MailForm.css';

function MailForm() {
  const [fields, setFields] = useState({
    email: '',
    name: '',
    message: '',
    file: ''
  });

  const handleInputChange = ({ target }) => {
    if (target.name === 'file') fields[target.name] = target.files;
    fields[target.name] = target.value;
    setFields(fields);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(fields);
  }

  return (
    <main>
      <h1>E-Mail Service 📫 ✉️</h1>
      <form className="email-container">
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" onChange={ handleInputChange } placeholder="type the email address" />
      
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={ handleInputChange } placeholder="type your name" />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" onChange={ handleInputChange } placeholder="type your message" />

      <label htmlFor="file">Attach File</label>
      <input type="file" id="file" name="file" onChange={ handleInputChange } multiple />

      <button type="submit" onClick={ handleClick }>Send</button>
      </form>
    </main>
  );
}

export default MailForm;

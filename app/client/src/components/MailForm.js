import './MailForm.css';

function MailForm() {
  return (
    <main>
      <h1>E-Mail Service 📫 ✉️</h1>
      <form className="email-container">
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" placeholder="type the email address" />
      
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="type your name" />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="type your message" />

      <label htmlFor="attach">Attach</label>
      <input type="file" id="attach" name="attach" multiple />

      <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default MailForm;

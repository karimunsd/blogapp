import './Navbar.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for reaching out!`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-content">
        <p>Have questions or feedback? We’d love to hear from you. Please fill out the form below or email us directly at <strong>support@blogapp.com</strong>.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
            />
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>&copy; 2024 BlogApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;

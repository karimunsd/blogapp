import './Style.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      alert('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-holder">
        <h2>Create New Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <img src="/img/user.png" alt="User Icon" />
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User name"
              required
            />
          </div>
          <div className="form-group">
            <img src="/img/email.png" alt="Email Icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <img src="/img/lock.png" alt="Lock Icon" />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
          <div className="form-group">
            <a href="/login" className="right-link">
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

import './Style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      alert(`Logged in as ${username}`);
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-holder">
        <img src="/img/user.png" className="logo" alt="user logo" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <img src="/img/user.png" alt="user icon" />
            <input
              type="text"
              id="username"
              placeholder="User name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <img src="/img/lock.png" alt="lock icon" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign in</button>
          </div>
          <div className="form-group">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/sign-up" className="right-link">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

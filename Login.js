import './Style.css';


function Login() {
    return (
        <div className="wrapper">
            <div className="form-holder">
                <img src="/img/user.png" className="logo" alt="user logo" />
                <h2>Login</h2>
                <form action="/users/login" className="form" method="POST">
                    <div className="form-group">
                        <img src="/img/user.png" alt="user icon" />
                        <input type="text" id="username" placeholder="User name" name="username" required />
                    </div>
                    <div className="form-group">
                        <img src="/img/lock.png" alt="lock icon" />
                        <input type="password" id="password" placeholder="Password" name="password" required />
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

import './Style.css';

function Register(){

    return (
        <div className="wrapper">
            <div className="form-holder">
                <h2>Create New Account</h2>
                <form className="form" onSubmit="http://localhost:5000/register/save" method="post">
                    <div className="form-group">
                        <img src="/img/user.png" alt="User Icon" />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="User name"
                            
                            required
                        />
                    </div>
                    <div className="form-group">
                        <img src="/img/email.png" alt="Email Icon" />
                        <input
                            type="text"
                            id="email"
                            name="email"
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
                            placeholder="Password"
                            
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" >Register</button>
                    </div>
                    <div className="form-group">
                        <a href="/index" className="right-link">
                            Sign in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Register;
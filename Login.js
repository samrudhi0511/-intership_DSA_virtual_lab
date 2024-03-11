import React from 'react';
import "./login.css"
function Login() {
    return (
        <div className="container">
            <div className="top">
                <div className="bottom">
                    <div className="center">
                        <form method="POST" action="login.php">
                            <h2>Sign Form</h2>
                            <input type="email" placeholder="email" name="email" required />
                            <input type="password" placeholder="password" name="password" required />
                            <input type="submit" id="btn" value="login" name="submit" />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import './LoginForm.css'; // Import your CSS file for styling

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data

    // If the form data is valid, submit it to the backend

    // Example:
    // axios.post("/api/users/login", formData)
    //   .then(response => {
    //     // Handle successful login
    //   })
    //   .catch(error => {
    //     // Handle failed login
    //   });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password action, like redirecting or showing a modal
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-container">
        <img src="https://images.unsplash.com/photo-1521297535956-188e3047b461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Login background" />
        <div className="form-content">
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={8}
          />

          <a href="/forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </a>

          <button type="submit">Login</button>

          <div className="social-login-buttons">
            <button type="button" className="google-login-button">
              Sign in with Google
            </button>
            <button type="button" className="facebook-login-button">
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;


import React, { useState } from "react";
import './RegistrationForm.css'; // Import your CSS file for styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // axios.post("/api/users/register", formData)
    //   .then(response => {
    //     // Handle successful registration
    //   })
    //   .catch(error => {
    //     // Handle failed registration
    //   });
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="registration-container">
        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Registration background" />
        <div className="form-content">
          <h2>Register</h2>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={8}
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            minLength={8}
          />

          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;


import React, { useState } from "react";
import "./RegisterBusiness.css";

const RegisterBusiness = ({ accessToken }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    businessType: "",
    country: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("https://mutify.onrender.com/api/v1/business/register-business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessage("Business registered successfully!");
      } else {
        setError(data.message || "Failed to register business");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-business-container">
      <h2>Register Your Business</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="businessType" placeholder="Business Type" value={formData.businessType} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default RegisterBusiness;

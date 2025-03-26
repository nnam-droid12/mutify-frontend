import React, { useState } from "react";
import "./CreateReceipt.css";

const CreateReceipt = ({ accessToken }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    amount: "",
    date: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://mutify.onrender.com/api/v1/receipts/create-receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create receipt");
      }

      const data = await response.json();
      setMessage("Receipt created successfully!");
      setFormData({ customerName: "", amount: "", date: "" });
    } catch (error) {
      setMessage("Error creating receipt. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-receipt-container">
      <h2>Create Receipt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Receipt"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CreateReceipt;
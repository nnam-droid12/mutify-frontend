import React, { useState } from "react";
import "./CreateReceipt.css";

const CreateReceipt = ({ accessToken }) => {
  const [formData, setFormData] = useState({
    businessId: "",
    customerName: "",
    items: "",
    totalAmount: "",
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

    const formattedData = {
      businessId: Number(formData.businessId), // Convert to number
      customerName: formData.customerName,
      items: formData.items.split(",").map((item) => item.trim()), // Convert to array
      totalAmount: parseFloat(formData.totalAmount), // Convert to float
    };

    try {
      const response = await fetch("https://mutify.onrender.com/api/v1/receipts/create-receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Failed to create receipt");
      }

      await response.json();
      setMessage("Receipt created successfully!");
      setFormData({ businessId: "", customerName: "", items: "", totalAmount: "" });
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
          type="number"
          name="businessId"
          placeholder="Business ID"
          value={formData.businessId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="items"
          placeholder="Items (comma-separated)"
          value={formData.items}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.01"
          name="totalAmount"
          placeholder="Total Amount"
          value={formData.totalAmount}
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
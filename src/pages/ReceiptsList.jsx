import React, { useEffect, useState } from "react";
import "./ReceiptsList.css";

const ReceiptsList = ({ accessToken, onSelectReceipt }) => {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = accessToken || localStorage.getItem("accessToken");

    if (!token) {
      setError("Missing access token");
      return;
    }

    const fetchReceipts = async () => {
      try {
        const response = await fetch("https://mutify.onrender.com/api/v1/receipts/getAllReceipt", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setReceipts(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReceipts();
  }, [accessToken]);

  return (
    <div className="receipts-container">
      <h2>All Receipts</h2>
      {loading && <p>Loading receipts...</p>}
      {error && <p className="error">{error}</p>}
      
      <div className="receipts-grid">
        {receipts.map((receipt) => (
          <div key={receipt.id} className="receipt-item">
            <p><strong>Customer:</strong> {receipt.customerName}</p>
            <p><strong>Total Amount:</strong> ${receipt.totalAmount}</p>
            <button onClick={() => onSelectReceipt(receipt.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptsList;
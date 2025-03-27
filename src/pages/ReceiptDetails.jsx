import React, { useEffect, useState } from "react";
import "./ReceiptDetails.css";

const ReceiptDetails = ({ accessToken, receiptId, onBack }) => {
  const [receipt, setReceipt] = useState(null);
  const [qrCode, setQrCode] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReceiptDetails = async () => {
      try {
        const response = await fetch(
          `https://mutify.onrender.com/api/v1/receipts/get-receiptById/${receiptId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch receipt details");
        }

        const data = await response.json();
        setReceipt(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReceiptDetails();
  }, [accessToken, receiptId]);

  const generateQRCode = async () => {
    try {
      const response = await fetch(
        `https://mutify.onrender.com/api/v1/receipts/generate-qr/${receiptId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to generate QR code");
      }
  
      const blob = await response.blob();
      const qrUrl = URL.createObjectURL(blob); 
      setQrCode(qrUrl);
    } catch (error) {
      setError(error.message);
    }
  };

  const convertToImage = async () => {
    try {
      const response = await fetch(
        "https://mutify.onrender.com/api/v1/receipts/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(receipt),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to convert receipt to image");
      }
  
      const imageUrl = await response.text(); 
      setImageUrl(imageUrl);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading receipt details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!receipt) return <p>No receipt found.</p>;

  return (
    <div className="receipt-details-container">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h2>Receipt Details</h2>
      <p><strong>Customer:</strong> {receipt.customerName}</p>
      <p><strong>Total Amount:</strong> ${receipt.totalAmount}</p>
      <p><strong>Items:</strong> {receipt.items.join(", ")}</p>
      <p><strong>Timestamp:</strong> {receipt.timestamp}</p>

      <div className="button-container">
  <button onClick={generateQRCode}>Generate QR Code</button>
  {qrCode && <img src={qrCode} alt="QR Code" className="qr-code" />}

  <button onClick={convertToImage}>Convert to Image</button>
  {imageUrl && (
    <div>
      <p>Receipt Image:</p>
      <img src={imageUrl} alt="Receipt" className="receipt-image" />
    </div>
  )}
</div>
    </div>
  );
};

export default ReceiptDetails;
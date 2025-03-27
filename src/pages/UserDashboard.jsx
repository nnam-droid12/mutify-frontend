import React, { useState, useEffect } from "react";
import RegisterBusiness from "./RegisterBusiness";
import CreateReceipt from "./CreateReceipt";
import ReceiptsList from "./ReceiptsList";
import ReceiptDetails from "./ReceiptDetails";
import AdminAssistant from "./AdminAssistant"; // Import the AdminAssistant component
import "./Dashboard.css";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("register-business");
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    } else {
      console.error("Access token is missing!");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/signin";
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li
            className={activeTab === "register-business" ? "active" : ""}
            onClick={() => setActiveTab("register-business")}
          >
            Register Business
          </li>
          <li
            className={activeTab === "create-receipt" ? "active" : ""}
            onClick={() => setActiveTab("create-receipt")}
          >
            Create Receipt
          </li>
          <li
            className={activeTab === "all-receipts" ? "active" : ""}
            onClick={() => setActiveTab("all-receipts")}
          >
            All Receipts
          </li>
          <li
            className={activeTab === "admin-assistant" ? "active" : ""}
            onClick={() => setActiveTab("admin-assistant")}
          >
            Admin Assistant
          </li>
        </ul>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <main className="content">
          {activeTab === "register-business" && <RegisterBusiness accessToken={accessToken} />}
          {activeTab === "create-receipt" && <CreateReceipt accessToken={accessToken} />}
          {activeTab === "all-receipts" &&
            (selectedReceipt ? (
              <ReceiptDetails
                receiptId={selectedReceipt}
                accessToken={accessToken}
                onBack={() => setSelectedReceipt(null)}
              />
            ) : (
              <ReceiptsList accessToken={accessToken} onSelectReceipt={setSelectedReceipt} />
            ))}
          {activeTab === "admin-assistant" && <AdminAssistant accessToken={accessToken} />}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
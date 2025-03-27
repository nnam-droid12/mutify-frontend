import React, { useState } from "react";

const AdminAssistant = ({ accessToken }) => {
  const [responseText, setResponseText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAssistantResponse = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://mutify.onrender.com/api/v1/admin/assistant/voice-command",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch assistant response");
      }

      const textData = await response.text(); // Handle as text
      setResponseText(textData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-assistant">
      <h2>Admin Assistant</h2>
      <button onClick={fetchAssistantResponse} disabled={loading}>
        {loading ? "Fetching..." : "Get Voice Command Response"}
      </button>

      {error && <p className="error">{error}</p>}
      {responseText && (
        <div className="response-box">
          <pre>{responseText}</pre>
        </div>
      )}
    </div>
  );
};

export default AdminAssistant;
import React, { useState } from "react";
import { requestsAPI } from "../services/api";

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    quantity: "",
    urgency: "medium",
    hospital: "",
    patientName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestsAPI.createRequest(formData);
      alert("Blood request submitted successfully!");
      setFormData({
        bloodGroup: "",
        quantity: "",
        urgency: "medium",
        hospital: "",
        patientName: "",
      });
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div>
      <div className="section-card">
        <div className="section-header">
          <div>
            <h2 className="section-title">🩸 Request Blood</h2>
            <p className="section-subtitle">
              Submit an urgent blood request for patients in need
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              className="advanced-stats-card"
              style={{ textAlign: "left", marginBottom: "24px" }}
            >
              <h3
                style={{
                  color: "#dc2626",
                  marginBottom: "16px",
                  fontSize: "1.2rem",
                }}
              >
                📋 Request Guidelines
              </h3>
              <ul
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                  paddingLeft: "20px",
                }}
              >
                <li>Ensure patient details are accurate</li>
                <li>Select appropriate urgency level</li>
                <li>Provide valid hospital information</li>
                <li>Request will be reviewed within 2 hours</li>
              </ul>
            </div>
          </div>

          <div className="advanced-stats-card">
            <h3
              style={{
                color: "#1f2937",
                marginBottom: "24px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              📝 Blood Request Form
            </h3>

            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label className="form-label">🩸 Blood Group Required</label>
                <select
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, bloodGroup: e.target.value })
                  }
                  required
                  className="form-select"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">🅰️ A+</option>
                  <option value="A-">🅰️ A-</option>
                  <option value="B+">🅱️ B+</option>
                  <option value="B-">🅱️ B-</option>
                  <option value="AB+">🆎 AB+</option>
                  <option value="AB-">🆎 AB-</option>
                  <option value="O+">⭕ O+</option>
                  <option value="O-">⭕ O-</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">📊 Quantity (Units)</label>
                <input
                  type="number"
                  placeholder="Enter number of units"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  required
                  min="1"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">👤 Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient's full name"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">🏥 Hospital</label>
                <input
                  type="text"
                  placeholder="Enter hospital name"
                  value={formData.hospital}
                  onChange={(e) =>
                    setFormData({ ...formData, hospital: e.target.value })
                  }
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">⚡ Urgency Level</label>
                <select
                  value={formData.urgency}
                  onChange={(e) =>
                    setFormData({ ...formData, urgency: e.target.value })
                  }
                  className="form-select"
                >
                  <option value="low">🟢 Low</option>
                  <option value="medium">🔵 Medium</option>
                  <option value="high">🟠 High</option>
                  <option value="critical">🔴 Critical</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "8px" }}
              >
                🚀 Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;

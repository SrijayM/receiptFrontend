import React, { useState } from "react";

const UploadForm = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // hover of upload button
  const [isHoveredInput, setIsHoveredInput] = useState(false); // hover of file button

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a receipt");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("receipt", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      onResult(result);
    } catch (error) {
      alert("Error with receipt");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginTop: "10px",
    },
    input: {
      padding: "12px",
      fontSize: "1rem",
      border: "2px solid #ddd",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "350px",
      transition: "border-color 0.3s ease",
      cursor: isHoveredInput ? "pointer" : "none", 
      borderColor: isHoveredInput ? "#386c7c" : "#ddd"
    },
    button: {
      backgroundColor: "#386c7c",
      color: "#fff",
      border: "none",
      padding: "15px 35px",
      borderRadius: "8px",
      fontSize: "1.1rem",
      cursor: "pointer",
      width: "100%",
      maxWidth: "350px",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      transform: isHovered ? "scale(1.05)" : "none", 
      backgroundColor: isHovered ? "#284851" : "#386c7c",
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <strong style={{ color: "#386c7c", fontSize: "1.2rem" }}>Upload Receipt</strong>

      <label htmlFor="receipt"></label>
      <input
        id="receipt"
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
        style={styles.input}
        onMouseEnter={() => setIsHoveredInput(true)} 
        onMouseLeave={() => setIsHoveredInput(false)} 
      />
      <button
        style={styles.button}
        type="submit"
        disabled={loading}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        {loading ? "Processing..." : "Upload Image"}
      </button>
    </form>
  );
};

export default UploadForm;

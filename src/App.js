import React, { useState } from "react";

import UploadForm from "./components/UploadForm";
import DisplayResult from "./components/DisplayResults";

const App = () => {

  const [result, setResult] = useState(null);

  const handleData = (data) => {
    setResult(data);
  };

  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#e8f2fc",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow: "hidden",
    },
    header: {
      fontSize: "3rem",
      color: "#386c7f",
      marginBottom: "30px",
      fontWeight: "600",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "35px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      maxWidth: "600px",
      width: "100%",
      margin: "10px auto",
      border: "1px solid #e0e0e0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Receipt Converter</h1>
      <div style={styles.card}>

        <UploadForm onResult={handleData} />
        <DisplayResult result={result} />

      </div>
    </div>
  );
};

export default App;

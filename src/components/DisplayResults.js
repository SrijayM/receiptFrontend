import React from "react";

const DisplayResult = ({ result }) => {
  // empty case
  if (!result) return null;

  //defaults values
  const { storeName = "Unknown Store", address = "Unknown", location = "Unknown", lineItems = [], totalAmount = 0 } = result;

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3 style={{color:"#386c7c"}}>Receipt Details:</h3>

      <p >
        <strong style={{color:"#386c7c"}}>Store:</strong> {storeName} <br/>
        <strong style={{color:"#386c7c"}}>Location:</strong> {location} <br/>
        <strong style={{color:"#386c7c"}}>Address:</strong> {address}
      </p>

      {/*printing all items */}
      <h4 style={{color:"#386c7c"}}>Items:</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lineItems.slice(1).map((item, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {item.name || "Unnamed Item"}: ${item.value ? item.value.toFixed(2) : "0.00"}
          </li>
        ))}
      </ul>
      <p>
        <strong style={{color:"#386c7c"}}>Total Amount:</strong> ${totalAmount.toFixed(2)}
      </p>
      
    </div>
  );
};

export default DisplayResult;

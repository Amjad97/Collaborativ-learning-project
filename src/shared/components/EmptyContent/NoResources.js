import React from "react";

export default function NoResources({ text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(50vh - 135px)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "middle",
          color: "#4174FF",
          borderRadius: 60,
          fontWeight: "bold",
          fontSize: 22
        }}
      >
        {text}
      </div>
    </div>
  );
}

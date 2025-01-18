import React from "react";
import "./ErrorMsg.module.css";

function ErrorMsg({ message }) {
  return <div className="error">{message}</div>;
}

export default ErrorMsg;

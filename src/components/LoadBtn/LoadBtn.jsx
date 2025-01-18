import React from "react";
import "./LoadBtn.module.css";

function LoadBtn({ onClick }) {
  return (
    <button className="load-more" onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadBtn;

import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="flex flex-row">
      <div className="lds-ellipsis mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

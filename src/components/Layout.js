import React from "react";
import Collapse from "./Collapse";

export default function Layout() {
  return (
    <div className="mobile:px-4 tablet:px-10 desktop:px-40">
      {/* Jenis-jenis Kucing di Dunia */}
      <Collapse />
    </div>
  );
}

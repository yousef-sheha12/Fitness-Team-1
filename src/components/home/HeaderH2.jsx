import React from "react";

export default function HeaderH2({ text, highlight }) {
  return (
    <h2 className="text-2xl md:text-5xl font-bold leading-tight mt-2">
      {text}
      <span className="text-primary">{highlight}</span>
    </h2>
  );
}

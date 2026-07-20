import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white p-6 text-center font-bold">
      <p>© {new Date().getFullYear()} Vicky Rachman.</p>
    </footer>
  );
}

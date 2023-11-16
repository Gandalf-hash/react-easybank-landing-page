import React from "react";

function Navbar() {
  return (
    <div className="w-full flex  flex-row justify-between items-center gap-6 h-20 sticky top bg-red-500">
      <img src="/images/logo.svg" alt="Easy Bank Logo" className="" />
      <div className="flex flex-row gap-6">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
        <span>Careers</span>
      </div>
    </div>
  );
}

export default Navbar;

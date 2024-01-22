import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer items-center justify-center p-4 bg-[#ecfef4]  text-neutral-content">
      <aside>
        <p className="text-[#04724D] capitalize">
          Copyright © {currentYear} - All rights reserved by Mohammad Shahriar
          Hossain
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

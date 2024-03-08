import React from "react";
import Container from "../Container/Container";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-gray-50">
      <Container>
        <footer className="footer items-center justify-center p-4   text-neutral-content rounded-full">
          <aside>
            <p className="text-[#04724D] capitalize">
              Copyright © {currentYear} - All rights reserved by Mohammad
              Shahriar Hossain
            </p>
          </aside>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;

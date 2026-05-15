"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 bg-black/50 backdrop-blur-xl shadow-lg"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <nav className="px-10 py-3">
        <div className="flex justify-between items-center mx-15 px-3">
          <a href="https://nexait.io/">
            <Image
              src="https://nexait.io/assets/images/logo-full.svg"
              alt="Nexait-logo"
              width={160}
              height={50}
            />
          </a>

          <div className="flex gap-10 text-lg font-semibold items-center">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>

            <button className="bg-[#ed5b2d] px-4 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

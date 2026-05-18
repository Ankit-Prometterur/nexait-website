"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaRegFileCode, FaLink } from "react-icons/fa";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".services-dropdown")) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`text-white w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-black/50 backdrop-blur-xl shadow-lg" : "absolute top-0 bg-transparent"}`}
    >
      <nav className="py-3">
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

            <div className="relative group services-dropdown">
              <a
                href="#"
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
              >
                Services
              </a>

              <div
                className={`fixed left-0  right-0 top-[65px] transition-all duration-500 bg-[white] p-10 pt-16 text-black  ${servicesOpen ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"}`}
              >
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 w-full px-6">
                  <div>
                    <h2 className="text-[45px] font-bold leading-none whitespace-nowrap">
                      Made to Scale
                    </h2>
                    <p className="mt-6 font-light text-[#6d6d6d]">
                      Our software development services are built to evolve your
                      business idea into a successful growth story
                    </p>
                    <div className="mt-8 overflow-hidden rounded-2xl max-w-[400px]">
                      <img
                        src="https://nexait.io/assets/images/services/uiux/uiux-bg-2.webp"
                        alt="services.img"
                        className="h-[100px] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <div className="flex items-center">
                        <h3 className="flex items-center gap-1 text-[22px] font-bold mr-2">
                          <span className="text-[#ed5b2d] "><MdOutlineSendToMobile /></span> Mobile App
                        </h3>
                        <ArrowUpRight />
                      </div>
                      <ul className="mt-5 space-y-4 text-[15px] text-[#6e6d6d] [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:duration-300 [&>li:hover]:text-[#ed5b2d]">
                        <li>React Native App</li>
                        <li>Flutter App</li>
                        <li>Native Android App</li>
                        <li>Native IOS App</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="flex items-center gap-1 text-[22px] font-bold">
                          <span className="text-[#ed5b2d]"><FaLink /></span> Hire Dedicated Resource
                        </h3>
                        <ArrowUpRight />
                      </div>
                      <ul className="mt-5 space-y-4 text-[15px] text-[#555] [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:duration-300 [&>li:hover]:text-[#ed5b2d]">
                        <li>Hire Dedicated Mobile App Developer</li>
                        <li>Hire Dedicated Web Developer</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <h3 className="flex items-center gap-1 text-[22px] font-bold">
                        <span className="text-[#ed5b2d] "><FaRegFileCode /></span> E-commerce Development
                      </h3>
                      <ArrowUpRight className="shrink-0" />
                    </div>
                    <ul className="mt-5 space-y-4 text-[15px] text-[#555] [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:duration-300 [&>li:hover]:text-[#ed5b2d]">
                      <li>Magento Development</li>
                      <li>Prestashop Development</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <h3 className="flex items-center gap-1 text-[22px] font-bold"><span className="text-[#ed5b2d]"><FaRegFileCode /></span>Web Development</h3>
                      <ArrowUpRight />
                    </div>
                    <ul className="mt-5 space-y-4 text-[15px] text-[#555] [&>li]:cursor-pointer [&>li]:transition-colors [&>li]:duration-300 [&>li:hover]:text-[#ed5b2d]">
                      <li>Software Development</li>
                      <li>Web Application Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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

"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaRegFileCode, FaLink } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const mobileMenu = (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        // Close when clicking the backdrop (outside the sidebar)
        if (e.target === e.currentTarget) setMobileMenuOpen(false);
      }}
    >
      <div className="h-full w-[320px] overflow-y-auto overscroll-contain bg-[#111827] border-r border-white/10 p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <Image
            src="https://nexait.io/assets/images/logo-full.svg"
            alt="logo"
            width={120}
            height={40}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl text-white leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mt-16 flex flex-col">
          <a
            href="#"
            className="border-b border-white/10 py-5 text-md font-semibold text-white"
          >
            About
          </a>

          <div className="border-b border-white/10 py-5">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between text-md font-semibold text-white"
            >
              Services
              <span className="text-xs text-gray-400">
                {mobileServicesOpen ? "━" : "╋"}
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="mt-6 space-y-6 pl-2">
                <div className="border-t border-white/10">
                  <h4 className="mt-2 text-[14px] font-bold text-white flex gap-1 items-center">
                    <span className="text-[#ed5b2d] text-xl">
                      <MdOutlineSendToMobile />
                    </span>
                    Mobile App
                  </h4>
                  <ul className="mt-3 space-y-2 text-[12px] text-white/80">
                    <li>React Native App</li>
                    <li>Flutter App</li>
                    <li>Native Android App</li>
                    <li>Native IOS App</li>
                  </ul>
                </div>

                <div className="border-t border-white/10">
                  <h4 className="mt-2 text-[14px] font-bold text-white flex gap-1 items-center">
                    <span className="text-[#ed5b2d] text-xl">
                      <FaRegFileCode />
                    </span>
                    E-commerce Development
                  </h4>
                  <ul className="mt-3 space-y-2 text-[12px] text-white/80">
                    <li>Magento Development</li>
                    <li>Prestashop Development</li>
                  </ul>
                </div>

                <div className="border-t border-white/10">
                  <h4 className="mt-2 text-[14px] font-bold text-white flex gap-1 items-center">
                    <span className="text-[#ed5b2d] text-xl">
                      <FaRegFileCode />
                    </span>
                    Web Development
                  </h4>
                  <ul className="mt-3 space-y-2 text-[12px] text-white/80">
                    <li>Software Development</li>
                    <li>Web Application Development</li>
                  </ul>
                </div>

                <div className="border-t border-white/10">
                  <h4 className="mt-2 text-[14px] font-bold text-white flex gap-1 items-center">
                    <span className="text-[#ed5b2d] text-xl">
                      <FaLink />
                    </span>
                    Hire Dedicated Resource
                  </h4>
                  <ul className="mt-3 space-y-2 text-[12px] text-white/80">
                    <li>Hire Dedicated Mobile App</li>
                    <li>Hire Dedicated Web Developer</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            className="border-b border-white/10 py-5 text-md font-semibold text-white"
          >
            Portfolio
          </a>

          <a
            href="#"
            className="border-b border-white/10 py-5 text-md font-semibold text-white"
          >
            Blog
          </a>
        </div>

        <div className="mt-auto pt-10">
          <button className="w-full rounded-full bg-[#ed5b2d] py-3 text-md font-semibold text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {mounted && mobileMenuOpen && createPortal(mobileMenu, document.body)}

      <header
        className={`text-white w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 bg-black/50 backdrop-blur-xl shadow-lg"
            : "absolute top-0 bg-transparent"
        }`}
      >
        <nav className="py-3">
          <div className="flex items-center justify-between px-2 min-[768px]:px-5 min-[990px]:mx-15 min-[990px]:px-3">
            <a href="https://nexait.io/">
              <Image
                src="https://nexait.io/assets/images/logo-full.svg"
                alt="Nexait-logo"
                width={160}
                height={50}
                className="w-35 h-[33px] min-[768px]:w-[160px] min-[768px]:h-[50px]"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden min-[990px]:flex gap-10 text-lg font-semibold items-center">
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
                  className={`fixed left-0 right-0 top-[65px] transition-all duration-500 bg-white p-10 pt-16 text-black ${
                    servicesOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                  }`}
                >
                  <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 w-full px-6">
                    <div>
                      <h2 className="text-[45px] font-bold leading-none whitespace-nowrap">
                        Made to Scale
                      </h2>
                      <p className="mt-6 font-light text-[#6d6d6d]">
                        Our software development services are built to evolve
                        your business idea into a successful growth story
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
                          <h3 className="mr-2 flex items-center gap-1 text-[22px] font-bold">
                            <span className="text-[#ed5b2d]">
                              <MdOutlineSendToMobile />
                            </span>
                            Mobile App
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
                            <span className="text-[#ed5b2d]">
                              <FaLink />
                            </span>
                            Hire Dedicated Resource
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
                          <span className="text-[#ed5b2d]">
                            <FaRegFileCode />
                          </span>
                          E-commerce Development
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
                        <h3 className="flex items-center gap-1 text-[22px] font-bold">
                          <span className="text-[#ed5b2d]">
                            <FaRegFileCode />
                          </span>
                          Web Development
                        </h3>
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

              <button className="rounded-full bg-[#ed5b2d] px-4 py-2">
                Contact Us
              </button>
            </div>

            {/* Hamburger button */}
            <div className="min-[990px]:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2937]/50 backdrop-blur-md"
                aria-label="Open menu"
              >
                <div className="space-y-1">
                  <span className="block h-[2px] w-5 bg-white/50"></span>
                  <span className="block h-[2px] w-5 bg-white/50"></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

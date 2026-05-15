import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 text-white">
      <div className="mx-auto max-w-425">
        <div className="grid grid-cols-1 gap-20 border-b border-[#171f2e] pb-16 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div>
                <h3 className="mb-8 text-[21px] font-semibold">
                  Useful Resources
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af]">
                  <li className="transition hover:text-white cursor-pointer">
                    About Nexait
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Portfolio
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Blog
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-8 text-[21px] font-semibold">
                  Useful Resources
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af]">
                  <li className="transition hover:text-white cursor-pointer">
                    Mobile App Development
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    E-commerce Development
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Web Development
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Software Development
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[32px] font-medium opacity-0">
                  Hidden
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af]">
                  <li className="transition hover:text-white cursor-pointer">
                    Web Application Development
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Hire Dedicated Mobile App
                  </li>

                  <li className="transition hover:text-white cursor-pointer">
                    Hire Dedicated Web Developer
                  </li>
                </ul>
              </div>
            </div>

            <ul className="mt-30 flex items-center gap-4">
              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#121212] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex  h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex  h-7 w-13 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-[21px] font-semibold">Global Presence</h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="border-b">
                <div className="flex items-start gap-4 mb-7">
                  <Image
                    src="https://nexait.io/assets/images/usa-flag-24.svg"
                    width={24}
                    height={24}
                    alt="usa"
                  />

                  <div>
                    <h5 className="mb-3 text-[16px] font-semibold">
                      USA Office
                    </h5>

                    <p className="text-[13px] text-[#d4d4dd]">
                      112, 166 Geary St. 15th Floor, San Francisco, CA, San
                      Francisco, US, 94108
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <div className="flex items-start gap-4">
                  <Image
                    src="https://nexait.io/assets/images/india-flag-24.svg"
                    width={24}
                    height={24}
                    alt="india"
                  />

                  <div>
                    <h5 className="mb-3 text-[16px] font-semibold">
                      India Office
                    </h5>

                    <p className="text-[13px] text-[#d4d4dd]">
                      Office no. 2228, 2nd Floor, J.K Infotech, Hinjewadi -
                      Phase 1, Near Ruby Hall Clinic, Pune - 411057
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4">
              <div className="mb-3 flex items-center gap-4">
                <FiPhone className="text-[#ed5b2d]" />

                <p className="text-[13px] text-[#d4d4dd]">
                  <strong className="text-white">US:</strong> +1 650 741 1380
                </p>
              </div>

              <div className="mb-3 flex items-center gap-4">
                <FiPhone className="text-[#ed5b2d]" />

                <p className="text-[13px] text-[#d4d4dd]">
                  <strong className="text-white">India:</strong> +91 8087555678
                </p>
              </div>

              <div className="flex items-center gap-4">
                <MdOutlineEmail className="text-[22px] text-[#ed5b2d]" />

                <p className="text-[13px] text-[#d4d4dd]">
                  <strong className="text-white">Email:</strong> info@nexait.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-10">
            <a href="https://nexait.io">
              <Image
                src="https://nexait.io/assets/images/logo-sm.svg"
                width={120}
                height={26}
                alt="logo"
              />
            </a>

            <div className="h-6 w-[1px] bg-[white]" />

            <p className="text-[14px] text-[#9ca3af]">
              © 2026 Nexait. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

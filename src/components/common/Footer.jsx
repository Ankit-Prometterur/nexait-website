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
    <footer className="bg-black pt-16 pb-10 text-white min-[768px]:pt-20">
      <div className="px-4 min-[768px]:px-6 min-[1400px]:mx-22">
        <div className="grid grid-cols-1 gap-10 border-b border-[#171f2e] pb-16 lg:grid-cols-2">
          <div>
            <div className="grid grid-cols-2 gap-5 min-[480px]:grid-cols-2 min-[768px]:grid-cols-[1.5fr_1.5fr_1.3fr]">
              <div>
                <h3 className="mb-8 font-semibold min-[768px]:text-[21px]">
                  Useful Resources
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af]">
                  <li className="cursor-pointer transition hover:text-white">
                    About Nexait
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Portfolio
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Blog
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-8 font-semibold min-[768px]:text-[21px]">
                  Useful Resources
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af]">
                  <li className="cursor-pointer transition hover:text-white">
                    Mobile App Development
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    E-commerce Development
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Web Development
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Software Development
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-8 font-semibold opacity-0 min-[768px]:text-[21px]">
                  Hidden
                </h3>

                <ul className="space-y-3 text-[14px] text-[#9ca3af] ">
                  <li className="cursor-pointer transition hover:text-white">
                    Web Application Development
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Hire Dedicated Mobile App
                  </li>

                  <li className="cursor-pointer transition hover:text-white">
                    Hire Dedicated Web Developer
                  </li>
                </ul>
              </div>
            </div>

            <ul className="mt-12 hidden items-center gap-4 min-[768px]:flex">
              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
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
            <h3 className="mb-10 font-semibold min-[768px]:text-[21px]">
              Global Presence
            </h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="border-b">
                <div className="mb-7 flex items-start gap-4">
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

                    <p className="text-[13px] leading-[1.6] text-[#d4d4dd]">
                      112, 166 Geary St. 15th Floor, San Francisco, CA, San
                      Francisco, US, 94108
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
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

                    <p className="text-[13px] leading-[1.6] text-[#d4d4dd]">
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

        <div className="mt-10 flex flex-col  justify-between gap-8 pt-5 min-[768px]:flex-row">
          <div className="flex flex-col  gap-6 text-center min-[768px]:flex-row">
            <a href="https://nexait.io">
              <Image
                src="https://nexait.io/assets/images/logo-sm.svg"
                width={120}
                height={26}
                alt="logo"
              />
            </a>

            <ul className="flex items-center gap-4 min-[768px]:hidden">
              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
                >
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex h-7 w-12 items-center justify-center rounded-full bg-[#ffffff1a] text-white transition hover:bg-[#ed5b2d]"
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

            <div className="hidden h-6 w-[1px] bg-white min-[768px]:block" />

            <p className="text-[14px] text-left text-[#9ca3af]">
              © 2026 Nexait. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import portfolioData from "@/data/portfolioData";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + portfolioData.length) % portfolioData.length,
    );
  };

  return (
    <section className="py-25 bg-black overflow-hidden">
      <div className="mx-22">
        <div className="flex gap-8">
          <div>
            <h2 className="text-white text-[52px] leading-[1.2]">
              Building Bridges with Digital Solutions and Scaling Business
              Across Platforms
            </h2>
          </div>

          <div>
            <p className="text-white text-2xl w-200">
              We empower businesses to dominate markets and industries at the
              global level via modern digital solutions. Our Engineers and
              developers are experienced creators of high-performing software
              products that transform businesses into industry leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="flex items-center justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -120) {
                nextSlide();
              }

              if (info.offset.x > 120) {
                prevSlide();
              }
            }}
            className="relative w-full h-[810px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {portfolioData.map((item, index) => {
              let offset = index - activeIndex;

              if (offset > portfolioData.length / 2) {
                offset -= portfolioData.length;
              }

              if (offset < -portfolioData.length / 2) {
                offset += portfolioData.length;
              }

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: `${offset * 100}%`,
                    scale: offset === 0 ? 1 : 0.88,
                    opacity: offset === 0 ? 1 : 0.35,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    zIndex: offset === 0 ? 20 : 10,
                  }}
                  className="absolute"
                >
                  <div className="w-[1070px]">
                    <div className="relative rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        width={1070}
                        height={620}
                        alt={item.title}
                        className="w-full h-[560px] object-cover pointer-events-none"
                      />
                    </div>

                    <div className="grid grid-cols-[1.2fr_1fr_0.8fr] gap-10 pt-8">
                      <div>
                        <h3 className="text-white text-[52px] font-bold leading-none">
                          {item.title}
                        </h3>

                        <div className="bg-[#23232c] rounded-lg p-4 mt-5 w-fit">
                          <p className="text-[#9c9c9c] text-lg mb-2">
                            Built with
                          </p>

                          <p className="text-white font-medium">{item.tech}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-white text-[20px] leading-[1.3]">
                          {item.description}
                        </p>

                        <button className="mt-6 border-3 border-white px-5 py-3 bg-[#ed5b2d] rounded-full font-bold hover:bg-transparent hover:text-white duration-500">
                          View Case Study
                        </button>
                      </div>

                      <div className="pt-2">
                        <p className="text-white">Results</p>

                        <div className="text-white mt-6">
                          <h4 className="font-bold text-4xl">{item.result1}</h4>

                          <p>{item.resultText1}</p>
                        </div>

                        <div className="text-white mt-6">
                          <h4 className="font-bold text-4xl">{item.result2}</h4>

                          <p>{item.resultText2}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

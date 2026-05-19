"use client";

import portfolioData from "@/data/portfolioData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + portfolioData.length) % portfolioData.length,
    );
  };

  return (
    <section className="overflow-hidden bg-black py-16 min-[768px]:py-18 min-[990px]:py-25">
      <div className="px-4 min-[768px]:px-4 min-[990px]:mx-20">
        <div className="flex flex-col gap-6 min-[768px]:grid min-[768px]:grid-cols-2 min-[990px]:flex-row min-[990px]:gap-8">
          <div className="min-[990px]:flex-1">
            <h2
              className="
            text-white
            text-[36px]
            leading-[1.1]

            min-[768px]:text-[42px]
            min-[990px]:text-[52px]
          "
            >
              Building Bridges with Digital Solutions and Scaling Business
              Across Platforms
            </h2>
          </div>

          <div className="min-[990px]:flex-1">
            <p
              className="
            text-white
            text-[20px]
            leading-[1.5]

            min-[768px]:text-[22px]
            min-[990px]:max-w-[800px]
            min-[990px]:text-2xl
          "
            >
              We empower businesses to dominate markets and industries at the
              global level via modern digital solutions. Our Engineers and
              developers are experienced creators of high-performing software
              products that transform businesses into industry leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-14 min-[768px]:mt-20">
        <div className="flex items-center justify-center">
          <motion.div
            drag="x"
            dragElastic={0.04}
            dragMomentum={false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -120) {
                nextSlide();
              }

              if (info.offset.x > 120) {
                prevSlide();
              }
            }}
            className="
  relative
  flex
  min-h-[580px]
  w-full
  items-center
  justify-center
  overflow-hidden
  cursor-grab
  active:cursor-grabbing

  min-[768px]:h-[750px]
  min-[990px]:h-[810px]
"
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
                  className="absolute px-4 min-[768px]:px-5"
                >
                  <div className="w-full max-w-[1070px]">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        width={1070}
                        height={620}
                        alt={item.title}
                        className="
                      pointer-events-none
                      h-[180px]
                      over
                      w-full
                      object-cover

                      min-[768px]:h-[410px]
                      min-[990px]:h-[540px]
                    "
                      />
                    </div>

                    <div
                      className="
    flex
    flex-col
    gap-8
    pt-8

    min-[768px]:grid
    min-[768px]:grid-cols-[1.2fr_1fr_0.8fr]
  "
                    >
                      <div>
                        <h3
                          className="
                        text-white
                        text-[40px]
                        font-bold
                        leading-none

                        min-[990px]:text-[52px]
                      "
                        >
                          {item.title}
                        </h3>

                        <div className="mt-5 w-full rounded-lg bg-[#23232c] p-4">
                          <p className="mb-2 text-[15px] text-[#9c9c9c] min-[768px]:text-lg">
                            Built with
                          </p>

                          <p className="text-[16px] font-medium text-white min-[768px]:text-[18px]">
                            {item.tech}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p
                          className="
                        text-[18px]
                        leading-[1.5]
                        text-white

                        min-[768px]:text-[17px]
                        min-[990px]:text-[20px]
                      "
                        >
                          {item.description}
                        </p>

                        <button
                          className="
                        mt-6
                        rounded-full
                        border-2
                        border-white
                        bg-[#ed5b2d]
                        px-5
                        py-3
                        text-[15px]
                        font-bold
                        duration-500
                        hover:bg-transparent
                        hover:text-white

                        min-[768px]:text-[18px]
                      "
                        >
                          View Case Study
                        </button>
                      </div>

                      <div className="hidden pt-2 min-[768px]:block">
                        <p className="text-[18px] text-white min-[768px]:text-[16px] min-[768px]:text-gray-400/50  min-[990px]:text-[22px]">
                          Results
                        </p>

                        <div className="mt-6 text-white">
                          <h4 className="text-2xl font-bold min-[990px]:text-4xl">
                            {item.result1}
                          </h4>

                          <p className="mt-2 text-[16px] min-[990px]:text-[18px]">
                            {item.resultText1}
                          </p>
                        </div>

                        <div className="mt-6 text-white">
                          <h4 className="text-2xl font-bold min-[990px]:text-4xl">
                            {item.result2}
                          </h4>

                          <p className="mt-2 text-[16px] min-[990px]:text-[18px]">
                            {item.resultText2}
                          </p>
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

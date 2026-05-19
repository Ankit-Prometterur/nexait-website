"use client";

import statsData from "@/data/statsData";
import Image from "next/image";
import { useState } from "react";

const Stats = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="bg-white py-14 min-[768px]:py-20 min-[990px]:py-25">
      <div className="px-4 min-[768px]:px-5 min-[990px]:mx-25">
        <div className="flex flex-col gap-5 min-[768px]:hidden">
          {statsData.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className="cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-xl transition-all duration-500 ${isActive ? "h-[400px]" : "h-[80px] opacity-75"}`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/35"></div>

                  {isActive && (
                    <div className="relative flex h-full flex-col justify-center p-5 text-white">
                      <h2 className="mb-3 text-[46px] font-bold">
                        {card.number}
                      </h2>

                      <h3 className="mb-4 text-[22px] font-semibold">
                        {card.title}
                      </h3>

                      <p className="text-[15px] leading-[1.6] text-gray-100">
                        {card.description}
                      </p>
                    </div>
                  )}
                </div>
                <h5 className="mt-3 text-[17px] font-semibold">{card.title}</h5>
              </div>
            );
          })}
        </div>

        <div className="hidden min-[768px]:flex min-[768px]:gap-4 min-[990px]:gap-5 min-[768px]:justify-center">
          {statsData.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                className={`
                  cursor-pointer
                  transition-all
                  duration-700
                  ease-in-out

                  ${
                    isActive
                      ? "min-[768px]:w-[45%] min-[990px]:w-[35%]"
                      : "min-[768px]:w-[12%] min-[990px]:w-[10%] opacity-70"
                  }
                `}
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-xl

                    min-[768px]:h-[420px]
                    
                  "
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30"></div>

                  <div className="relative z-10 flex h-full flex-col justify-center p-6 min-[990px]:p-10 text-white">
                    <div
                      className={`
                        transition-all
                        duration-700
                        delay-200
                        ease-in-out

                        ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }
                      `}
                    >
                      <h2
                        className="
                          mb-4
                          font-bold

                          min-[768px]:text-6xl
                          min-[990px]:text-7xl
                        "
                      >
                        {card.number}
                      </h2>

                      <h3
                        className="
                          mb-4
                          font-semibold

                          min-[768px]:text-[28px]
                          min-[990px]:text-3xl
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          max-w-md
                          leading-relaxed
                          text-gray-200

                          min-[768px]:text-[16px]
                          min-[990px]:text-lg
                        "
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                <h5
                  className="
                    mt-4
                    font-semibold
                    leading-snug

                    min-[768px]:text-[18px]
                    min-[990px]:text-[17px]
                  "
                >
                  {card.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

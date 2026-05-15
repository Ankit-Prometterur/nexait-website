"use client";

import statsData from "@/data/statsData";
import Image from "next/image";
import { useState } from "react";

const Stats = () => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className="py-25">
      <div className="mx-25 px-4">
        <div className="flex gap-4 justify-center">
          {statsData.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                className={`
          transition-all duration-700 ease-in-out
          cursor-pointer
          ${isActive ? "w-[35%]" : "w-[10%] opacity-70"}
        `}
              >
                <div className="relative h-100 overflow-hidden rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  <div className="relative z-10 h-full flex flex-col justify-center p-10 text-white">
                    <div
                      className={`
    transition-all duration-600 delay-200 ease-in-out
    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
                    >
                      <h2 className="text-7xl font-bold mb-4">{card.number}</h2>

                      <h3 className="text-3xl font-semibold mb-4">
                        {card.title}
                      </h3>

                      <p className="text-lg leading-relaxed max-w-md text-gray-200">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                <h5 className="mt-4 text-[17px] font-semibold leading-snug">
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

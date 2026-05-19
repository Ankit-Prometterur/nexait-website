import servicesData from "@/data/servicesData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-black py-16 text-white min-[768px]:py-20">
      
      <div className="px-4 min-[768px]:px-5 min-[990px]:mx-25 min-[990px]:py-4">
        
        <div className="max-w-full min-[990px]:max-w-300">
          
          <h2
            className="
              text-[34px]
              leading-[1.2]
              font-light

              min-[768px]:text-[52px]
            "
          >
            We innovate and rejuvenate, delivering
            solutions with a development process that
            outpaces industry standards
          </h2>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-5

            min-[768px]:grid-cols-3
            min-[768px]:gap-6

            min-[990px]:mt-15
            min-[990px]:grid-cols-4
          "
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#1f1e1e]
                bg-[#0e0d0d]
                transition-all
                duration-300
                hover:border-[#ed5b2d]
                hover:bg-[#302e2e]

                h-[150px]
                p-5

                min-[768px]:h-[170px]
                min-[768px]:p-6
              "
            >
              
              {/* ICON */}
              <div className="opacity-80">
                <Image
                  src={service.icon}
                  width={service.width}
                  height={service.height}
                  alt={service.title}
                  className="
                    w-auto

                    h-[26px]
                    min-[768px]:h-auto
                  "
                />
              </div>

              {/* TITLE */}
              <div className="absolute bottom-5 left-5 min-[768px]:left-6">
                
                <h3
                  className="
                    max-w-[180px]
                    leading-[1.3]
                    font-bold
                    text-[#888383]
                    transition-all
                    duration-500
                    group-hover:text-white

                    text-[20px]

                    min-[768px]:max-w-45
                    min-[768px]:text-[22px]
                  "
                >
                  {service.title}
                </h3>
              </div>

              {/* ARROW */}
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  flex
                  items-center
                  justify-center
                  rounded-tl-full
                  bg-[#1a1a1a]
                  transition-all
                  duration-500
                  group-hover:bg-[#ed5b2d]

                  h-8
                  w-8

                  min-[768px]:h-10
                  min-[768px]:w-10
                "
              >
                <ArrowUpRight
                  size={24}
                  className="
                    ml-2
                    mt-2
                    overflow-hidden
                    text-[#ed5b2d]
                    transition-all
                    duration-500
                    group-hover:text-white
                  "
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import servicesData from "@/data/servicesData";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-25 py-4">
        <div className="max-w-300">
          <h2 className="text-[52px] leading-[1.25] font-light">
            We innovate and rejuvenate, delivering solutions with a development
            process that outpaces industry standards
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-15">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative h-[170px] overflow-hidden rounded-xl border border-[#1f1e1e] bg-[#0e0d0d] p-6 transition-all duration-300 hover:border-[#ed5b2d] hover:bg-[#302e2e]"
            >
              <div className="opacity-80">
                <Image
                  src={service.icon}
                  width={service.width}
                  height={service.height}
                  alt={service.title}
                />
              </div>

              <div className="absolute bottom-5 left-6">
                <h3 className="max-w-45 text-[22px] leading-[1.3] font-bold text-[#888383] group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>
              </div>

              <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-tl-full bg-[#1a1a1a] group-hover:bg-[#ed5b2d] transition-all duration-500 ">
                <ArrowUpRight size={26} className="text-[#ed5b2d] group-hover:text-white transition-all duration-500 overflow-hidden mt-2 ml-2"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

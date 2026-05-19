import Image from "next/image";

const HeroAwards = () => {
  return (
    <section className="bg-black py-8 min-[768px]:py-10">
      <div className="px-4 min-[768px]:px-8 min-[990px]:mx-25 min-[990px]:py-2">
        <div
          className="
       grid
       grid-cols-3
       gap-y-10
       place-items-center
       min-[768px]:flex
       min-[768]: gap-8
       min-[768px]:justify-center
       min-[990px]:flex-nowrap
       min-[990px]:justify-between
  "
        >
          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/iso-lg.svg"
              alt="hero-award"
              width={62}
              height={62}
              className="h-[50px] w-auto min-[768px]:h-[62px]"
            />
          </div>

          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/NASSCOM_lg.svg"
              alt="hero-award"
              width={159}
              height={25}
              className="h-[14px] w-auto min-[768px]:h-[25px]"
            />
          </div>

          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/clutch-lg.svg"
              alt="hero-award"
              width={123}
              height={35}
              className="h-[25px] w-auto min-[768px]:h-[35px]"
            />
          </div>

          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/goodfirms-lg.svg"
              alt="hero-award"
              width={166}
              height={25}
              className="h-[13px] w-auto min-[768px]:h-[25px]"
            />
          </div>

          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/trustpilot-lg.svg"
              alt="hero-award"
              width={73}
              height={35}
              className="h-[25px] w-auto min-[768px]:h-[35px]"
            />
          </div>

          <div>
            <Image
              src="https://nexait.io/assets/images/bagge/gdpr-lg.svg"
              alt="hero-award"
              width={62}
              height={62}
              className="h-[50px] w-auto min-[768px]:h-[62px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAwards;

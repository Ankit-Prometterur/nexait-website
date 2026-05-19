const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="block min-[990px]:hidden">
 
        <div className="px-4 pt-25 pb-8 text-white min-[768px]:px-8 min-[768px]:pt-33 min-[768px]:pb-10">
          
          <h1
            className="
              text-[32px]
              font-light
              leading-[1.08]
              tracking-[-1px]

              min-[768px]:text-[60px]
            "
          >
            Explore the Architects of Modern Digital
            Solutions
          </h1>

          <p
            className="
              mt-8
              text-[23px]
              leading-[1.45]
              text-gray-200

              min-[768px]:mt-6
              min-[768px]:text-[28px]
            "
          >
            We are positioning businesses for growth,
            development, and success using modern tools
            and robust technologies.
          </p>
        </div>

  
        <div
          className="
            relative
            
            w-full

            min-[768px]:h-[500px]
          "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://nexait.io/assets/video/Nexait_hero.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      <div className="relative hidden h-screen min-[990px]:block">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source
            src="https://nexait.io/assets/video/Nexait_hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex h-full items-center mx-15 px-5">
          <div className="pt-18 text-white">
            
            <h1 className="max-w-5xl text-[80px] font-light leading-tight">
              Explore the Architects of Modern Digital
              Solutions
            </h1>

            <p className="mt-8 max-w-5xl text-3xl leading-relaxed text-gray-200">
              We are positioning businesses for growth,
              development, and success using modern tools
              and robust technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
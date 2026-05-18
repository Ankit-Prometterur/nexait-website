const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://nexait.io/assets/video/Nexait_hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex items-center h-full mx-15 px-5">
        <div className="text-white flex flex-col justify-center pt-18">
          <h1 className="text-[80px] font-light leading-tight mb-8 max-w-5xl">Explore the Architects of Modern Digital Solutions</h1>
          <p className="text-3xl text-gray-200 leading-relaxed max-w-5xl">
            We are positioning businesses for growth, development, and success
            using modern tools and robust technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

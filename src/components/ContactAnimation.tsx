export const ContactAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] md:min-h-[350px]">
      <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
        
        <iframe
          src="https://lottie.host/embed/631bbd8a-116f-11ee-aeeb-5ba5d53aec3b/H45rUOStSz.lottie"
          className="w-full h-full relative z-10 border-0"
          style={{ background: "transparent" }}
          title="Contact animation"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export const ContactAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] md:min-h-[350px]">
      <div className="relative w-full max-w-[250px] md:max-w-[350px] aspect-square">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
        
        <iframe
          src="https://lottiefiles.com/animations/contact-us-yBw4jIh7E6/embed?autoplay=1&loop=1&controls=0"
          className="w-full h-full relative z-10 border-0"
          style={{ background: "transparent" }}
          title="Contact animation"
          loading="lazy"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

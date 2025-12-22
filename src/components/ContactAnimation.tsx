import contactIllustration from "@/assets/contact-illustration.svg";

export const ContactAnimation = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] md:min-h-[350px]">
      <div className="relative w-full max-w-[280px] md:max-w-[400px]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
        
        <object
          type="image/svg+xml"
          data={contactIllustration}
          className="w-full h-auto relative z-10"
          aria-label="Contact illustration"
        >
          Contact illustration
        </object>
      </div>
    </div>
  );
};

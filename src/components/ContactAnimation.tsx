import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// LottieFiles URL for "Contact Us" animation
const LOTTIE_URL = "https://assets-v2.lottiefiles.com/a/631bbd8a-116f-11ee-aeeb-5ba5d53aec3b/H45rUOStSz.lottie";

export const ContactAnimation = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(LOTTIE_URL)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load Lottie animation:", error));
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] md:min-h-[350px]">
      <div className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
        
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full h-full relative z-10"
            style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.2))" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

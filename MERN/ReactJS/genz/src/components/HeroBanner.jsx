/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute w-full h-full object-cover opacity-60"
        src="/assets/hero-banner.mp4" // Placeholder: Replace with your GenZ hero video
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-genz font-bold text-white drop-shadow-lg neon-text"
        >
          GenZ Streetwear
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-neon-pink font-semibold"
        >
          Bold. Urban. Unapologetic.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroBanner;

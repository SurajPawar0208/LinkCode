/* eslint-disable no-unused-vars */
import React from "react";
import { products } from "../data/products";
import { motion } from "framer-motion";

const trending = products.filter((p) => p.trending).slice(0, 8);

const TrendingCarousel = () => (
  <div className="w-full py-8 bg-black/80">
    <h2 className="text-2xl md:text-4xl font-genz text-neon-green text-center mb-6">Trending Outfits</h2>
    <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide">
      {trending.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.07 }}
          className="min-w-[220px] bg-zinc-900 rounded-xl shadow-lg p-4 flex-shrink-0 border-2 border-neon-pink hover:border-neon-green transition-all duration-300"
        >
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <div className="text-white font-bold text-lg mb-1">{item.name}</div>
          <div className="text-neon-pink font-semibold">${item.price}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TrendingCarousel;

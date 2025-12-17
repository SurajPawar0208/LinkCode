/* eslint-disable no-unused-vars */
import React from "react";
import { userPrefs } from "../data/userPrefs";
import { products } from "../data/products";
import { motion } from "framer-motion";

const forYou = products.filter(
  (p) => userPrefs.forYou || userPrefs.favoriteCategories.includes(p.category)
).slice(0, 6);

const ForYouSection = () => (
  <section className="py-8 bg-zinc-950">
    <h2 className="text-2xl md:text-4xl font-genz text-neon-blue text-center mb-6">For You</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {forYou.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 rounded-xl shadow-md p-4 border border-neon-blue hover:border-neon-pink transition-all duration-300"
        >
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <div className="text-white font-semibold text-base mb-1">{item.name}</div>
          <div className="text-neon-blue font-bold">${item.price}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ForYouSection;

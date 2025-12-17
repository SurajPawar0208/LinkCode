import React from "react";
import HeroBanner from "../components/HeroBanner";
import TrendingCarousel from "../components/TrendingCarousel";
import ForYouSection from "../components/ForYouSection";
import CategoryGrid from "../components/CategoryGrid";

const Home = () => (
  <main className="bg-zinc-950 min-h-screen">
    <HeroBanner />
    <TrendingCarousel />
    <ForYouSection />
    <CategoryGrid />
  </main>
);

export default Home;

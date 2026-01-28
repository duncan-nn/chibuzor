import React from "react";
import { Metadata } from "next";
import HomeHeroSection from "@/components/homepage/HomeHeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";


export const metadata: Metadata = {
  title: "Chibuzor Nnorom | Creative Web Designer & Developer",
  description: "Explore the portfolio of a creative web developer and designer specializing in modern websites, intuitive UX, and scalable frontend solutions.",
};

export default async function Home() {

  return (
    <div className="home-page">
      <Navbar />
      <HomeHeroSection />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}

import AboutUs from "@/section/AboutUs";
import CompetitionStages from "@/section/CompetitionStages";
import Hero from "@/section/Hero";
import Navbar from "@/section/Navbar";

export default function Home() {
  return (
    <div className="bg-red-100 h-screen">
      <Navbar />
      
      <Hero />

      <AboutUs />

      <CompetitionStages />
    </div>
  );
}

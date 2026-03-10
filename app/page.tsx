import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const InstagramSection = dynamic(
  () => import("@/components/InstagramSection"),
);
const Booking = dynamic(() => import("@/components/Booking"));
const MapSection = dynamic(() => import("@/components/Map"));

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramSection />
        <Booking />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}

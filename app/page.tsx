import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InstagramSection from "@/components/InstagramSection";
import Booking from "@/components/Booking";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

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
        <Map />
      </main>
      <Footer />
    </>
  );
}

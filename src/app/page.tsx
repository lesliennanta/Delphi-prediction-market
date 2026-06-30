import Navbar from "@/components/Navbar";
import TickerStrip from "@/components/TickerStrip";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TickerStrip />
      <Dashboard />
      <Footer />
    </>
  );
}

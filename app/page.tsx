import { Booking } from "./components/Booking";
import { Environment } from "./components/Environment";
import {
  Footer,
  Gallery,
  Header,
  Hero,
  HeroStrip,
  Pricing,
  Process,
  Reviews,
  Services,
} from "./components/StaticSections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <HeroStrip />
        <Services />
        <Process />
        <Pricing />
        <Gallery />
        <Environment />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

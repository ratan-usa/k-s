import Image from "next/image";
import Hero from "./components/hero";
import HeroV2 from "./components/hero-v2";

export default function Home() {
  return (
    <div className="">
      <HeroV2/>
      <Hero />
    </div>
  );
}

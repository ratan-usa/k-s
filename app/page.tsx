import Image from "next/image";
import Hero from "./components/hero";
import HeroV2 from "./components/hero-v2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black  dark:bg-black">
      <Hero />
      <HeroV2/>
    </div>
  );
}

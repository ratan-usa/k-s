import React from "react";
import { Button } from "@/components/ui/button";
import { Wrench, PhoneCall, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Subtle Grid/Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202023_1px,transparent_1px),linear-gradient(to_bottom,#202023_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Decorative Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#b72121] blur-[120px] rounded-full opacity-20 pointer-events-none" />

      <div className=" px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm">
              <ShieldCheck className="h-4 w-4 text-[#b72121]" />
              <span className="font-medium tracking-wide uppercase text-xs">Premium Piping Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              K & S <br />
              <span className="text-[#b72121]">The Pipe Expert</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Delivering high-performance, durable, and precision-engineered piping systems for industrial, commercial, and residential projects. When quality matters, trust the experts.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#b72121] hover:bg-[#961a1a] text-white font-semibold shadow-lg shadow-[#b72121]/20 transition-all duration-200"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Get a Quote
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-zinc-700 hover:border-white bg-transparent text-zinc-300 hover:text-white transition-all duration-200"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-2xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center p-8 overflow-hidden group">
              {/* Outer rotating pipe-like accent line */}
              <div className="absolute inset-0 border border-dashed border-[#b72121]/30 rounded-2xl scale-95 pointer-events-none group-hover:scale-100 transition-transform duration-500" />
              
              {/* Giant Stylized Icon/Graphic */}
              <Wrench className="w-32 h-32 sm:w-44 sm:h-44 text-[#b72121] opacity-90 drop-shadow-[0_0_25px_rgba(183,33,33,0.3)] transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-zinc-950/90 border border-zinc-800 px-4 py-3 rounded-xl shadow-xl backdrop-blur-sm flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#b72121] animate-pulse" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Available 24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
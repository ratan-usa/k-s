import React from "react";
import { Button } from "@/components/ui/button";
import { Wrench, PhoneCall, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white overflow-hidden min-h-[85vh] flex items-center relative border-b border-zinc-900">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" />

      {/* Decorative Red Glow */}
      <div className="absolute top-1/4 left-1/4 h-[250px] w-[250px] bg-[#cc2221] blur-[120px] rounded-full opacity-20 pointer-events-none" />

      {/* Strict Fluid Layout Container (Edge-to-Edge Bounds) */}
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left Content Column - Aligned Stiff to Left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-zinc-900 text-zinc-400 text-sm">
              <ShieldCheck className="h-4 w-4 text-[#cc2221]" />
              <span className="font-medium tracking-wide uppercase text-[10px]">Premium Piping Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-none uppercase">
              K & S <br />
              <span className="text-[#cc2221]">The Pipe Expert</span>
            </h1>

            <p className="text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
              Delivering high-performance, durable, and precision-engineered piping systems for industrial, commercial, and residential projects. When quality matters, trust the experts.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#cc2221] hover:bg-[#b01e1d] text-white font-bold uppercase tracking-wider text-xs px-8 py-6 rounded-none shadow-lg transition-all duration-200"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Get a Quote
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-zinc-800 hover:border-[#cc2221] bg-transparent text-zinc-400 hover:text-white font-bold uppercase tracking-wider text-xs px-8 py-6 rounded-none transition-all duration-200"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Visual Column - Aligned Stiff to Right Edge */}
          <div className="lg:col-span-5 flex justify-end w-full">
            <div className="relative w-full max-w-[450px] aspect-square bg-[#141414] border border-zinc-900 flex items-center justify-center p-8 overflow-hidden group rounded-sm shadow-2xl">
              {/* Outer structural element line */}
              <div className="absolute inset-0 border border-dashed border-[#cc2221]/20 scale-95 pointer-events-none group-hover:scale-100 transition-transform duration-500" />

              {/* Icon Graphic */}
              <Wrench className="w-36 h-36 sm:w-48 sm:h-48 text-[#cc2221] opacity-90 drop-shadow-[0_0_30px_rgba(204,34,33,0.3)] transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />

              {/* Dynamic Status Pin */}
              <div className="absolute bottom-6 right-6 bg-[#0a0a0a]/90 border border-zinc-900 px-4 py-2.5 flex items-center gap-3 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-[#cc2221] animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Available 24/7</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
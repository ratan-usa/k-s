import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Flame, Layers, HardHat } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative bg-black text-white min-h-[90vh] flex items-center overflow-hidden border-b border-zinc-900">
      
      {/* Background Grid Pattern & Red Laser Lines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f11_1px,transparent_1px),linear-gradient(to_bottom,#0f0f11_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-[#b72121]/30 via-transparent to-transparent hidden md:block" />
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b72121]/20 to-transparent" /> */}

      {/* Radical Red Radial Glow */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-[#b72121] blur-[150px] rounded-full opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        
        {/* Upper Trust Badges */}
        <div className="flex flex-wrap gap-4 items-center mb-8 justify-center md:justify-start">
          <span className="flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#b72121] bg-[#b72121]/10 px-3 py-1 rounded border border-[#b72121]/20">
            <Flame className="w-3.5 h-3.5" /> High-Spec Castings
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-zinc-400 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
            <HardHat className="w-3.5 h-3.5" /> Commercial & Industrial
          </span>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Typography & Action */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tighter leading-none">
              K & S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                THE PIPE
              </span> <br />
              <span className="text-[#b72121] relative inline-block">
                EXPERT
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#b72121]" />
              </span>
            </h1>

            {/* Structured Tagline Options */}
            <div className="max-w-xl mx-auto md:mx-0 space-y-4 pt-4">
              <p className="text-xl font-medium text-zinc-200">
                Built for Pressure. Engineered for Precision.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                From high-grade customized castings to seamless industrial infrastructure, Ben and the K & S team deliver heavy-duty piping systems designed to endure. 
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-[#b72121] hover:bg-zinc-900 text-white border border-[#b72121] hover:border-zinc-800 font-mono tracking-wide rounded-none transition-all duration-300 group"
              >
                Consult an Expert
                <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
              <Button 
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-zinc-400 hover:text-white font-mono tracking-wide rounded-none hover:bg-zinc-900/50"
              >
                View Specifications
              </Button>
            </div>
          </div>

          {/* Right Feature Panel (Instead of a raw image, a structural grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            
            {/* Stat Card 1 */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 backdrop-blur-sm group hover:border-[#b72121]/40 transition-colors">
              <Layers className="w-8 h-8 text-[#b72121] mb-4" />
              <h3 className="text-lg font-bold font-mono uppercase tracking-tight text-white mb-2">
                No Precast.
              </h3>
              <p className="text-xs text-zinc-400 leading-normal">
                Strictly premium heavy-duty castings engineered directly to site specifications for ultimate structural integrity.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-6 backdrop-blur-sm group hover:border-[#b72121]/40 transition-colors">
              <div className="text-2xl font-black font-mono text-white mb-4 tracking-tighter">
                0% <span className="text-[#b72121]">FAIL</span>
              </div>
              <h3 className="text-lg font-bold font-mono uppercase tracking-tight text-white mb-2">
                High-Pressure
              </h3>
              <p className="text-xs text-zinc-400 leading-normal">
                Industrial grade implementation certified to withstand maximum system loads without compromise.
              </p>
            </div>

            {/* Feature Banner Span */}
            <div className="sm:col-span-2 bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-900 p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">Direct Access</p>
                <p className="text-sm font-bold text-zinc-200">Need immediate technical project advice?</p>
              </div>
              <span className="text-xs font-mono text-[#b72121] font-bold border border-[#b72121]/30 bg-[#b72121]/5 px-2 py-1">
                Call  Us
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
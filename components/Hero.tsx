"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="-top-28 -left-20 h-[80vh] w-[50vw]" fill="blue" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-10 left-[40%] h-[80vh] w-[50vw]" fill="white" />
      <Spotlight className="top-10 left-[46%] h-[80vh] w-[50vw]" fill="purple" />

      <div className="h-screen w-full flex items-center justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">

          <h2 className="uppercase tracking-widest text-lg text-blue-100 mb-4">Welcome</h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
              Farzeen Muneer
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold mt-2 mb-6">
  Aspiring Software Engineer
</p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <button
              onClick={(e) => handleScroll(e, "projects")}
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200"
            >
              My Work
            </button>

            <a href="https://www.linkedin.com/in/farzeenmuneer/" target="_blank">
              <div className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-blur-lg border-2 border-blue-500 hover:bg-blue-500 rounded-lg transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
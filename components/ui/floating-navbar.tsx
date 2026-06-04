"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto z-[5000] items-center justify-center",
          className
        )}
      >
        <div className="flex items-center justify-center gap-1 rounded-full border border-white/10 bg-black/50 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md">
          {navItems.map((navItem, idx: number) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              <span className="hidden sm:block">{navItem.name}</span>
            </a>
          ))}
          <div className="h-5 w-px bg-white/10 mx-1" />
          <a
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white overflow-hidden group"
>
            <span className="absolute inset-0 rounded-full border border-white/60 group-hover:border-white transition-colors duration-300" />
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 12px 2px rgba(255,255,255,0.4), 0 0 24px 4px rgba(180,180,255,0.2)",
              }}
            />
            <span
              className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{
                boxShadow: "0 0 8px 1px rgba(255,255,255,0.25), 0 0 16px 2px rgba(160,160,255,0.15)",
              }}
            />
            <span className="relative z-10">Resume</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
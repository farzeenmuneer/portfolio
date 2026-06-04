"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
            Do you want to start a project together?
          </h2>

          <a
            href="mailto:farzeenmuneer729@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 text-sm font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
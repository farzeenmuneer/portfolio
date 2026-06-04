"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, categories } from "@/data/work";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Work() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-white text-center mb-8">Work</h2>
          <div className="flex gap-3 mb-10 flex-wrap justify-center">
            {categories.map((cat) => (
              <button key={cat.value} onClick={() => setFilter(cat.value)} className={`px-5 py-2 text-sm rounded-full transition-all ${filter === cat.value ? "bg-white text-black" : "text-neutral-500 hover:text-white"}`}>{cat.name}</button>
            ))}
          </div>
          <motion.div layout className="flex flex-wrap justify-center gap-6">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all w-[320px] min-h-[360px] flex flex-col">
  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
  <p className="text-sm text-purple-400 mb-3">{project.description}</p>

  {project.points && (
    <ul className="space-y-1.5 mb-4">
      {project.points.map((point, i) => (
        <li key={i} className="text-sm text-neutral-400 flex items-start gap-2">
          <span className="text-purple-500 mt-0.5 shrink-0">•</span>
          {point}
        </li>
      ))}
    </ul>
  )}

  {project.id === 1 && (
    <div className="flex gap-4 justify-end mb-3">
      <a href={project.github} target="_blank" className="text-neutral-400 hover:text-white"><GithubIcon size={22} /></a>
      <a href={project.live} target="_blank" className="text-neutral-400 hover:text-white"><ExternalLink size={22} /></a>
    </div>
  )}

  <div className="flex flex-wrap gap-2 mt-auto">
    {project.tech.map((t) => (<span key={t} className="px-3 py-1 text-sm rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">{t}</span>))}
  </div>
</motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
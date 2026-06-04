"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Techcake",
    duration: "2025",
    points: [
      "Developed and deployed web applications using Python and Django, implementing backend logic and RESTful APIs.",
      "Worked on database operations and full-stack features to improve application performance and user experience.",
    ],
    tech: ["Python", "Django", "REST APIs", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-6 border-l border-neutral-800"
              >
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <p className="text-base text-neutral-500">{exp.duration}</p>
                    <h3 className="text-xl font-semibold text-white mt-1">
                      {exp.role} -{" "}
                      <span className="text-purple-500">{exp.company}</span>
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-base text-neutral-400 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
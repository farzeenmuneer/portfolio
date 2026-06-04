"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "APJ Abdul Kalam Technological University",
    duration: "2022 – 2026",
    detail: "",
  },
  {
    degree: "Higher Secondary Education (XII)",
    school: "Seethi Sahib H S S",
    duration: "",
    detail: "Percentage: 93.4%",
  },
  {
    degree: "Secondary School Education (X)",
    school: "Seethi Sahib H S S",
    duration: "",
    detail: "CGPA: 10",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="relative pl-6 border-l border-neutral-800">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500" />
                {edu.duration && <p className="text-sm text-neutral-500">{edu.duration}</p>}
                <h3 className="text-xl font-semibold text-white mt-1">{edu.degree}</h3>
                <p className="text-purple-500 text-base">{edu.school}</p>
                <p className="text-neutral-400 text-base mt-1">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
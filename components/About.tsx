"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          
          <p className="text-white text-lg leading-relaxed mb-4">
  I&apos;m skilled in Python, SQL, and full-stack development. Proficient in building scalable web applications using Django, Flask, Node.js, and Express.js.
</p>
<p className="text-white text-lg leading-relaxed mb-4">
  I have a strong grasp of Data Structures, Algorithms, and object-oriented programming. Experienced in RESTful APIs, real-time systems, and Firebase-based cloud solutions. I write clean, maintainable code with Git.
</p>
<p className="text-white text-lg leading-relaxed mb-4">
  I have a background in Machine Learning and predictive analytics. A collaborative team player with strong problem-solving skills, eager to deliver high-quality software solutions.
</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python", "Java", "SQL", "Node.js", "Django", "React",
              "Firebase", "Git", "REST APIs", "Machine Learning",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
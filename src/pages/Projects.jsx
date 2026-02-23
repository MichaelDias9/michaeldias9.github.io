import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const projects = [
  {
    id: 1,
    title: "IMU Sensor Fusion",
    description: "Developed a 9-DOF complementary filter with quaternions in C++ for real-time attitude estimation and visualization using a RayLib front end. Wrote C device drivers and integrated third-party libraries using CMake.",
    tech: ["C++", "C", "CMake", "RayLib"],
    hasVideo: true,
    github: "https://github.com/MichaelDias9/IMU-Sensor-Fusion"
  },
  {
    id: 2,
    title: "3D Printer Exhaust Venting",
    description: "Designed and 3D printed a modular exhaust and ducting system. Modeled components in FreeCAD to optimize airflow paths and fitment tolerances. Iterated through multiple print/test cycles.",
    tech: ["FreeCAD", "3D Printing", "Rapid Prototyping"],
    hasVideo: false,
    github: "#"
  },
  {
    id: 3,
    title: "FPV Drone Build",
    description: "Selected and matched motor KV, 5” propellers, ESC ratings, and 4S LiPo. Soldered high-current power systems and integrated the flight controller. Configured Betaflight firmware and performed PID tuning.",
    tech: ["Electronics", "Soldering", "Betaflight", "PID Tuning"],
    hasVideo: true,
    github: "#"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.98 }}
      variants={staggerContainer}
      className="flex-grow flex flex-col p-4 sm:p-8 max-w-7xl mx-auto w-full gap-8 mt-4 pb-20"
    >
      <div className="flex flex-col mb-4">
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Featured Projects
        </motion.h1>
        <motion.p variants={fadeIn} className="text-lg text-slate-400 max-w-2xl">
          Here is a selection of my recent work. Click on the video icons or links to see them in action.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeIn}
            className="group flex flex-col bg-surface/30 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
          >
            {/* Media Placeholder Area */}
            <div className="relative aspect-video bg-slate-900 border-b border-white/5 overflow-hidden flex items-center justify-center">

              {/* Mockup Pattern Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

              <div className="z-10 flex flex-col items-center gap-3 opacity-50 text-slate-400 group-hover:scale-105 transition-transform duration-500">
                {project.hasVideo ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700">
                      <Play size={24} className="ml-1" />
                    </div>
                    <span className="text-sm font-semibold tracking-widest uppercase">Video Placeholder</span>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-sm font-semibold tracking-widest uppercase text-slate-300">Image Placeholder</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h2>
                <div className="flex gap-2">
                  <a href={project.github} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-300 transition-colors" title="View Source">
                    <Github size={18} />
                  </a>
                  {project.hasVideo && (
                    <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-300 transition-colors" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

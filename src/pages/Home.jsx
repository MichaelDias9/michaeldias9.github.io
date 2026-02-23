import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Code, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      variants={staggerContainer}
      className="flex-grow flex flex-col p-4 sm:p-8 max-w-6xl mx-auto w-full gap-6 mt-4 pb-20"
    >
      {/* Header Profile Section */}
      <motion.header variants={fadeIn} className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-surface/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary w-fit text-sm font-medium mb-2">
            <Sparkles size={16} />
            <span>Available for Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Michael Dias</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Hands-on maker and computer science graduate with strong experience in embedded systems, rapid prototyping, and problem-driven engineering. Comfortable designing in CAD, programming microcontrollers, soldering electronics, and iterating physical systems from concept to functional hardware. Thrives in resource-constrained, build-it-yourself environments.
          </p>
        </div>
      </motion.header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Column - Experience & Education */}
        <div className="md:col-span-2 flex flex-col gap-6">

          <motion.section variants={fadeIn} className="bg-surface/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-[1.2rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

              {/* Experience Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-slate-800 text-slate-500 group-[.is-active]:text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface/50 p-5 rounded-2xl border border-white/5 transition duration-300 hover:bg-surface hover:shadow-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-white text-lg">Indoor Localization App</h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">Feb - Aug 2024</span>
                  </div>
                  <div className="text-slate-400 text-sm mb-3">Startup</div>
                  <p className="text-sm text-slate-500">Developed a mobile app combining GPS, pedometer, and Bluetooth beacons. Built a Python (Flask) backend and implemented an Extended Kalman Filter for sensor fusion.</p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface/50 p-5 rounded-2xl border border-white/5 transition duration-300 hover:bg-surface hover:shadow-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-white text-lg">Warehouse Logistics</h3>
                    <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-md">2021 - Present</span>
                  </div>
                  <div className="text-slate-400 text-sm mb-3">The Beer Store - Part Time</div>
                  <p className="text-sm text-slate-500">Operated electric ride-on pallet jacks in a safety-critical environment. Planned pallet builds and truck loading for efficient deliveries.</p>
                </div>
              </div>

            </div>
          </motion.section>

          <motion.section variants={fadeIn} className="bg-surface/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 rounded-2xl bg-surface/50 border border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-white">B.Sc. Computer Science</h3>
                  <p className="text-slate-400 text-sm">Western University</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">2019 - 2023</div>
                  <div className="text-xs text-slate-500">Dean's Honor List</div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>

        {/* Right Column - Skills & Interactive Projects Link */}
        <div className="md:col-span-1 flex flex-col gap-6">

          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/projects')}
            className="group cursor-pointer bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden h-48 shadow-xl shadow-primary/5"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md mb-2 group-hover:scale-110 transition-transform">
              <Briefcase size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">View Projects</h2>
              <p className="text-sm text-white/70">Click here to see detailed case studies</p>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <ChevronRight size={20} />
            </div>
          </motion.div>

          <motion.section variants={fadeIn} className="bg-surface/30 p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <div className="flex flex-col gap-3 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <span>📧</span> <a href="mailto:diasm0301@gmail.com" className="hover:text-primary transition-colors">diasm0301@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span>☎️</span> <span>226-977-4245</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span> <span>191 Edgehill Crescent, London, ON</span>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeIn} className="bg-surface/30 p-8 rounded-3xl border border-white/5 flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Code size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Skills</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-white text-sm font-semibold mb-2">Hardware</h3>
                <div className="flex flex-wrap gap-2">
                  {['Sensors', 'I²C/UART/PWM', 'Soldering', 'Crimping', 'FreeCAD', '3D Printing'].map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded bg-surface border border-white/5 text-slate-300 text-xs font-medium cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold mb-2">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C/C++', 'CMake', 'ESP32', 'FreeRTOS', 'SQL', 'JS'].map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded bg-surface border border-white/5 text-slate-300 text-xs font-medium cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </motion.div>
  );
}

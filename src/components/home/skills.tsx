'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ReactIcon, 
  NextjsIcon, 
  TypeScriptIcon, 
  TailwindIcon,
  Camera,
  Video,
  Film,
  WordPressIcon
} from './skill-icons'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    { name: 'React', level: 90, icon: ReactIcon },
    { name: 'Next.js', level: 85, icon: NextjsIcon },
    { name: 'TypeScript', level: 88, icon: TypeScriptIcon },
    { name: 'Tailwind', level: 95, icon: TailwindIcon },
    { name: 'Videography', level: 80, icon: Camera },
    { name: 'Video Editing', level: 85, icon: Video },
    { name: 'Photography', level: 75, icon: Film },
    { name: 'WordPress', level: 80, icon: WordPressIcon }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="neon-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive skill set spanning web development, creative media, and digital marketing.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group h-full min-h-[280px]"
              >
                {/* Outer Wrapper - Gradient Border */}
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 h-full">
                  {/* Inner Container - Content */}
                  <div className="relative h-full w-full bg-[#09090B] rounded-2xl p-6 flex flex-col items-center text-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 mb-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 p-0.5 group-hover:rotate-360 transition-transform duration-500">
                      <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white">
                      {skill.name}
                    </h3>

                    {/* Progress Bar Container */}
                    <div className="w-full mt-auto space-y-1">
                      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"
                        />
                      </div>
                      {/* Proficiency Text */}
                      <p className="text-xs text-gray-400 mt-1">
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
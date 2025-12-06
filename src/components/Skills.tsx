'use client';

import { motion } from 'framer-motion';
import { Code, Camera, Monitor, Palette, Globe, Video, Settings, FileText } from 'lucide-react';
import portfolioData from '@/constants';

const Skills = () => {
  const { skills } = portfolioData;

  // Map skills to icons
  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'React': Code,
      'Next.js': Globe,
      'TypeScript': FileText,
      'Tailwind CSS': Palette,
      'Videography': Video,
      'Video Editing': Camera,
      'Photography': Camera,
      'WordPress': Monitor
    };
    return iconMap[skill] || Code;
  };

  const getSkillColor = (index: number) => {
    const colors = [
      'from-pink-500 to-purple-500',
      'from-purple-500 to-blue-500',
      'from-blue-500 to-pink-500',
      'from-pink-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-blue-500 to-purple-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto rounded-full" 
            style={{ background: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)' }} />
        </motion.div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = getSkillIcon(skill);
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="glass-card rounded-xl p-4 sm:p-6 hover-glow transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon container - Responsive sizes */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br ${getSkillColor(index)} group-hover:animate-rotate transition-all duration-300`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  {/* Skill name - Responsive text */}
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2">{skill}</h3>
                  
                  {/* Skill level indicator */}
                  <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${getSkillColor(index)}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl lg:max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and design trends. 
              My expertise spans both technical development and creative disciplines, allowing me to deliver comprehensive digital solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
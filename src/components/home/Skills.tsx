'use client';

import { motion } from 'framer-motion';
import { Code, Camera, Monitor, Palette, Globe, Video, Settings, FileText, Zap } from 'lucide-react';
import portfolioData from '@/constants';
import SkillCard from '../SkillCard';

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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = getSkillIcon(skill);
            return (
              <SkillCard
                key={skill}
                title={skill}
                icon={Icon}
                description={`Advanced ${skill} development with modern best practices`}
                index={index}
              />
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl lg:max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Always Learning, Always Growing</h3>
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
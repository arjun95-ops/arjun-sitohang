'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  index: number;
}

const SkillCard = ({ title, icon: Icon, description, index }: SkillCardProps) => {
  // Define colors for gradient
  const colors = [
    'from-pink-500 to-purple-500',
    'from-purple-500 to-blue-500',
    'from-blue-500 to-cyan-500',
    'from-cyan-500 to-green-500',
    'from-green-500 to-yellow-500',
    'from-yellow-500 to-orange-500',
    'from-orange-500 to-red-500'
  ];

  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="relative bg-[#09090B] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      style={{
        borderColor: 'transparent'
      }}
    >
      {/* Neon border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${colorClass}, ${colorClass})`,
          border: '2px solid transparent',
          boxShadow: '0 0 15px rgba(255, 0, 114, 0.3)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-all duration-300"
          style={{ background: `linear-gradient(135deg, ${colorClass}, ${colorClass})` }}
        >
          <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white group-hover:animate-spin" />
        </div>
        
        {/* Skill Name */}
        <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
        
        {/* Skill Level Indicator */}
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mt-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
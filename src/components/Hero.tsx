import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, BarChart3, DollarSign, Building2, FileSearch } from 'lucide-react';

const Hero = () => {
  const stats = [
    { title: "Session Duration", value: "2m 18s", change: "+13%" },
    { title: "Transactions", value: "245", period: "1 Month" },
  ];

  return (
    <div id="início" className="relative overflow-hidden bg-gradient-to-br from-[#2B5F1E] to-[#53A524] min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-20 right-10 text-white/20 text-6xl">✨</div>
        <div className="absolute bottom-20 left-10 text-white/20 text-6xl">✨</div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6"
              animate={{
                scale: [1, 1.02, 1],
                x: [-2, 2, -2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg font-semibold">Analytics</h3>
                <span className="text-white/60">•••</span>
              </div>
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#FFC107"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="125.6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2196F3"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="188.4"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">80%</span>
                </div>
              </div>
            </motion.div>

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6"
                animate={{
                  scale: [1, 1.02, 1],
                  x: [-2, 2, -2]
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/60 text-sm">{stat.title}</p>
                    <h4 className="text-white text-2xl font-bold">{stat.value}</h4>
                    {stat.change && (
                      <span className="text-green-400 text-sm">{stat.change}</span>
                    )}
                  </div>
                  {stat.period && (
                    <span className="text-white/60 text-sm">{stat.period}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Smiling person"
              className="w-full rounded-2xl"
            />
            <div className="absolute -right-4 top-4 bg-white rounded-lg p-3 shadow-lg">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FileText className="w-6 h-6 text-green-600" />
              </motion.div>
            </div>
            <div className="absolute -left-4 bottom-4 bg-white rounded-lg p-3 shadow-lg">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BarChart3 className="w-6 h-6 text-green-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
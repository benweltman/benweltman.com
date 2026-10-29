import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import ParticleBackground from '../../components/common/ParticleBackground';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - Outside PageWrapper for full width */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <ParticleBackground />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-6">
            Developing <span className="text-primary">Digital</span> <br />
            Experiences.
          </h1>
          <p className="text-xl md:text-2xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
            Hello! I'm Ben,  an experienced UI Engineer crafting responsive websites, scalable design systems, and fast, accessible digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-primary/40 dark:bg-primary/20 backdrop-blur-md text-white rounded-lg font-normal text-lg hover:scale-105 transition-transform backdrop-blur-sm"
            >
              View My Work
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-slate-200/20 dark:bg-[#2a322c]/20 backdrop-blur-md rounded-lg font-normal text-lg hover:bg-slate-300/30 dark:hover:bg-[#353d37]/30 transition-colors backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      <PageWrapper className="py-24">
        {/* Quick Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'UI & Component Architecture',
              desc: 'Building scalable, reusable design systems and clean UI components.',
              icon: 'palette'
            },
            {
              title: 'Front-End Engineering',
              desc: 'Engineering robust, accessible web applications using modern JavaScript, TypeScript & React.',
              icon: 'code'
            },
            {
              title: 'Delivery & Performance',
              desc: 'Optimizing web performance, responsive layouts, and maintainable code standards.',
              icon: 'rocket_launch'
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-lg bg-[#f1f4f3] dark:bg-[#2a322c] border border-slate-200 dark:border-[#2a322c] hover:border-primary transition-colors group"
            >
              <span className="material-symbols-outlined text-4xl mb-4 block text-primary">{feature.icon}</span>
              <h3 className="text-2xl font-normal mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="opacity-70 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>
      </PageWrapper>
    </>
  );
};

export default HomePage;

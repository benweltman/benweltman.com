import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../types/projects';
import type { Project } from '../../types/projects';
import PageWrapper from '../../components/layout/PageWrapper';

const categories = [
  { label: 'Show All', value: 'All' },
  { label: 'SaaS & Web Apps', value: 'SaaS & Web Apps' },
  { label: 'Design Systems & UI Architecture', value: 'Design Systems & UI Architecture' },
  { label: 'Bespoke Websites & Portfolios', value: 'Bespoke Websites & Portfolios' },
];

const ProjectGrid: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.some(cat => cat === filter));

  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-normal text-primary mb-4">Portfolio</h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          A showcase of recent UI engineering, design system development, and responsive website projects.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              filter === cat.value
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-[#f1f4f3] dark:bg-[#2a322c] hover:bg-[#dbe3e0] dark:hover:bg-[#353d37]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project) => (
            <motion.a
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-[#f1f4f3] dark:bg-[#2a322c] border border-slate-200 dark:border-[#2a322c] hover:border-primary transition-colors cursor-pointer block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="flex flex-col items-center text-center mb-1">
                  <h3 className="font-normal text-lg group-hover:text-primary">{project.title}</h3>
                  {project.year !== 'N/A' && (
                    <span className="text-xs font-mono opacity-50">{project.year}</span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </PageWrapper>
  );
};

export default ProjectGrid;

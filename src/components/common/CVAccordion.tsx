import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 dark:border-[#343d37] last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-4 px-2 flex justify-between items-center text-left hover:bg-[#e6ecea] dark:hover:bg-[#3d4841] group"
      >
        <span className="font-normal text-lg group-hover:text-primary">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-2 pb-4 text-slate-700 dark:text-slate-200 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

interface CVSectionProps {
  title: string;
  items: { title: string; content: React.ReactNode }[];
  defaultOpenIndex?: number;
}

const CVSection: React.FC<CVSectionProps> = ({ title, items, defaultOpenIndex = null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-normal text-primary mb-6">{title}</h2>
      <div className="bg-[#f1f4f3] dark:bg-[#2a322c] rounded-lg border border-slate-200 dark:border-[#343d37] overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default CVSection;

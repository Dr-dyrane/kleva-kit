import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData, faqCategories } from './faqData';

const FAQItem = ({ item, isOpen, toggleItem }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 p-2 px-6">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggleItem}
      >
        <span className="text-lg font-normal text-gray-900 dark:text-white">{item.question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="py-4 text-gray-600 font-thin text-right dark:text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleItem = (index) => {
    setOpenItems(openItems.includes(index)
      ? openItems.filter(i => i !== index)
      : [...openItems, index]
    );
  };

  const filteredFAQs = activeCategory === 'All'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === 'All'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            } transition-colors duration-200`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {faqCategories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-normal ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              } transition-colors duration-200`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-0 lg:grid-cols-2 max-w-6xl divide-x-2 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"        >
          {filteredFAQs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              toggleItem={() => toggleItem(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Filter } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', '时尚', '品牌', '人像', '动态影像'];

  const filteredItems = filter === '全部' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
              视觉 <span className="text-gradient">存档</span>
            </h2>
            <p className="text-white/50 max-w-md font-light">
              跨越时尚、品牌视觉与艺术影像，每一个像素都承载着独特的情绪与故事。
            </p>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-4 h-4 text-white/40 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-gradient' 
                    : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-midnight via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 p-6 flex flex-col justify-end">
                  <span className="text-[0.6rem] font-bold text-cyber-purple uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-display font-black mb-1">{item.title}</h3>
                  <p className="text-white/40 text-xs font-light">{item.description}</p>
                </div>

                {/* Glow Edge */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-cyber-purple/50 rounded-2xl transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

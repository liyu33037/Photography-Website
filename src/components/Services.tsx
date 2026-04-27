import { motion } from 'motion/react';
import { Camera, Focus, User, Video, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, any> = {
  Camera,
  Focus,
  User,
  Video,
};

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold tracking-[0.2em] text-gradient uppercase mb-6"
          >
            服务体系
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight"
          >
            核心服务范围
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 md:p-12 glass border-l-4 border-l-cyber-purple hover:bg-white/[0.05] transition-colors relative"
              >
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient flex items-center justify-center glow mb-8">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold mb-1">{service.title}</h3>
                    <p className="text-white/40 text-sm font-medium tracking-wide uppercase">{service.subtitle}</p>
                  </div>

                  <p className="text-white/60 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-cyber-purple" />
                       <span className="text-xs font-medium text-white/80">价格区间: {service.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-sunset-orange" />
                       <span className="text-xs font-medium text-white/80">交付周期: {service.delivery}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

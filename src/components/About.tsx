import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Instagram, Smartphone, MessageCircle, Send } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 p-2">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                 alt="Sam Lin"
                 className="w-full h-full object-cover rounded-[2.5rem]"
                 referrerPolicy="no-referrer"
               />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl shadow-2xl hidden md:block">
               <div className="flex items-center gap-4">
                  <div className="text-3xl font-display font-black text-gradient">10+</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest leading-tight">
                    跨界拍摄<br />经验
                  </div>
               </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
                不仅仅是 <span className="text-gradient">记录者</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-light mb-6">
                我是 Sam Lin，一名深耕视觉艺术 10 年的创意摄影师。在我的镜头下，每一个快门都是一次对现实的重构。
              </p>
              <p className="text-white/50 leading-relaxed font-light">
                我曾与《VOGUE》、《BAZAAR》等时尚媒体及多个顶尖潮流品牌深度合作。我的设计哲学是将电影叙事手法融入商业摄影，打破常规的视觉界限，为每一个瞬间注入灵魂。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pb-8">
              <div className="space-y-2">
                <h4 className="text-cyber-purple font-bold">时尚触觉</h4>
                <p className="text-sm text-white/40 italic">Bold & Avant-garde</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sunset-orange font-bold">商业逻辑</h4>
                <p className="text-sm text-white/40 italic">Identity & Strategy</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <SocialLink icon={<Instagram />} label="Instagram" />
              <SocialLink icon={<MessageCircle />} label="小红书" />
              <SocialLink icon={<Smartphone />} label="抖音" />
              <SocialLink icon={<Send />} label="微信" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <a 
      href="#" 
      className="flex items-center gap-3 glass px-5 py-3 rounded-2xl hover:bg-white/10 transition-colors group"
    >
      <span className="text-white/60 group-hover:text-cyber-purple transition-colors">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: '时尚',
    budget: '5k-10k',
    description: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted to hello@samlin-visuals.com:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-charcoal relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-purple/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunset-orange/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
            开启 <span className="text-gradient">视觉合作</span>
          </h2>
          <p className="text-white/50 font-light">
            分享你的想法，让我们一起打造具有电影质感的视觉传奇。
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem]">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 text-center"
            >
              <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mx-auto mb-6 glow">
                <CheckCircle className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">需求已收到</h3>
              <p className="text-white/60 mb-8">
                感谢您的信任。我会在24小时内通过您提供的联系方式回复。
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-cyber-purple font-bold hover:underline"
              >
                再次提交需求
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-2 px-1">
                    姓名 / 品牌名
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Sam Lin"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-purple outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-2 px-1">
                    联系方式
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="Email / WeChat / Phone"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-purple outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-2 px-1">
                    项目类型
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-purple outline-none transition-colors appearance-none"
                  >
                    <option className="bg-charcoal">时尚摄影</option>
                    <option className="bg-charcoal">品牌全案</option>
                    <option className="bg-charcoal">艺术人像</option>
                    <option className="bg-charcoal">动态视频</option>
                    <option className="bg-charcoal">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-2 px-1">
                    预算范围
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-purple outline-none transition-colors appearance-none"
                  >
                    <option className="bg-charcoal">5k-10k</option>
                    <option className="bg-charcoal">10k-30k</option>
                    <option className="bg-charcoal">30k-50k</option>
                    <option className="bg-charcoal">50k以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/40 uppercase tracking-widest mb-2 px-1">
                  项目描述
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="简单描述您的项目需求与愿景..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-cyber-purple outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 btn-primary rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
              >
                提交预约需求
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

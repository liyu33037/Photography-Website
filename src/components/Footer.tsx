import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-10 border-t border-glass-border bg-midnight relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[0.7rem] text-slate-500 font-medium">
          © 2024 SAM LIN VISUALS. ALL RIGHTS RESERVED.
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[0.7rem] font-bold text-slate-500 uppercase tracking-widest">
           <a href="#portfolio" className="hover:text-cyber-purple transition-colors">作品集</a>
           <a href="#services" className="hover:text-cyber-purple transition-colors">服务项目</a>
           <a href="#about" className="hover:text-cyber-purple transition-colors">关于我</a>
           <a href="#booking" className="hover:text-sunset-orange transition-colors">联系合作</a>
        </div>

        <div className="text-center md:text-right space-y-1 text-[0.7rem] text-slate-600">
           <p>ICP备2024000000号-1 | hello@samlin-visuals.com</p>
           <p>XHS / DY / WX / TEL: 138-XXXX-8888</p>
        </div>
      </div>
    </footer>
  );
}

import { PlayCircle, BookOpen, GraduationCap } from 'lucide-react';

export default function Academy() {
  return (
    <section id="academy" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Скоро запуск</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              AI Academy: <br />
              <span className="text-gray-400">Управляйте своим будущим</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Мощный инструмент бесполезен, если не уметь им пользоваться. 
              Мы не просто даем доступ к нейросетям — мы учим мыслить как AI-архитектор.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Промпт-инжиниринг для себя</h3>
                  <p className="text-sm text-gray-500">Научитесь ставить задачи так, чтобы получать идеальный результат с первого раза.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Библиотека Сценариев</h3>
                  <p className="text-sm text-gray-500">Готовые шаблоны: от написания писем до планирования стратегических сессий.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors">
              Записаться в лист ожидания
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative glass rounded-2xl p-2 aspect-video flex items-center justify-center group cursor-pointer overflow-hidden border-0">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black z-0" />
               <img 
                 src="/api/placeholder/600/400" 
                 alt="Academy Preview" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
               />
               <div className="z-10 flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <PlayCircle className="w-10 h-10 text-white fill-current" />
                 </div>
                 <span className="font-semibold tracking-wider">СМОТРЕТЬ ТРЕЙЛЕР</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

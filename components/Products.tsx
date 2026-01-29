import { Check, Shield, Zap } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Выберите Уровень Интеллекта</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            От массового доступа к знаниям человечества до вашего личного цифрового бункера.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Universal Mind */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-48 h-48" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Universal Mind</h3>
            <p className="text-gray-400 mb-6">SaaS решение для ежедневных задач</p>
            <div className="text-4xl font-bold mb-6">$15 <span className="text-sm font-normal text-gray-500">/ мес</span></div>

            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500" /> Голосовые заметки в текст (Whisper)
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500" /> Web Search (Поиск в интернете)
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500" /> Генерация контента и картинок
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-500" /> Базовая контекстная память
              </li>
            </ul>

            <button className="w-full py-4 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white transition-all font-semibold border border-white/10">
              Подключить Universal
            </button>
          </div>

          {/* Private Cloud */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden border-purple-500/30 glow">
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST CHOICE
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Private Cloud Agent
            </h3>
            <p className="text-gray-400 mb-6">Ваш личный сервер и полная приватность</p>
            <div className="text-4xl font-bold mb-6">$300 <span className="text-sm font-normal text-gray-500">/ мес</span></div>

            <ul className="space-y-4 mb-8 text-gray-300">
              <li className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-500" /> 100% Приватность (Личный VPS)
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500" /> Глубокая память (RAG) на гигабайты
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500" /> Интеграции (Notion, Email, Calendar)
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-purple-500" /> Персональная настройка и обучение
              </li>
            </ul>

            <button className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.02] transition-transform font-bold shadow-lg shadow-purple-900/20">
              Заказать Private Cloud
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">+$1000 Setup Fee (единоразово)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

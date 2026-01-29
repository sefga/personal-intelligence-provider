import { Briefcase, Coffee, Globe, TrendingUp } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      title: "Для Бизнеса",
      description: "Автоматизируйте рутину. Ваш AI-агент может обрабатывать заявки 24/7, онбордить новых сотрудников и анализировать отчеты.",
      tags: ["Продажи", "HR", "Поддержка"]
    },
    {
      icon: <Coffee className="w-6 h-6 text-orange-400" />,
      title: "Для Жизни",
      description: "Освободите мозг для творчества. Голосовые заметки мгновенно превращаются в задачи. Планирование меню и путешествий за секунды.",
      tags: ["Ассистент", "Планирование", "Креатив"]
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Для Развития",
      description: "Персональный ментор, который помнит всё, что вы читали. Саммари книг, статей и видео. Подготовка к переговорам.",
      tags: ["Обучение", "Анализ", "Менторство"]
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Глобальный Поиск",
      description: "Не просто гуглит, а синтезирует ответ из десятков источников. Аналитика рынка и поиск редкой информации без рекламы.",
      tags: ["Research", "Аналитика", "Инсайты"]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сценарии Использования</h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

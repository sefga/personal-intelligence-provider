import { ArrowRight, Bot, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-400">System Online v2.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Ваш Цифровой <br />
          <span className="text-gradient">Штат Сотрудников</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Мы создаем персональные интеллекты. От универсальных ассистентов до приватных облачных нейросетей.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link href="#products" className="group relative px-8 py-4 bg-blue-600 rounded-lg overflow-hidden transition-all hover:bg-blue-700 hover:scale-105">
            <div className="flex items-center gap-2 font-bold text-lg">
              Выбрать Агента <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="#cases" className="px-8 py-4 glass rounded-lg hover:bg-white/5 transition-colors text-lg">
            Смотреть Кейсы
          </Link>
        </div>

        {/* Stats / Trust */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center">
            <Bot className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-2xl font-bold">24/7</span>
            <span className="text-sm text-gray-500">Доступность</span>
          </div>
          <div className="flex flex-col items-center">
            <Cpu className="w-8 h-8 text-purple-500 mb-2" />
            <span className="text-2xl font-bold">100%</span>
            <span className="text-sm text-gray-500">Приватность (Private Cloud)</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center text-xs font-bold text-green-500 mb-2">AI</div>
            <span className="text-2xl font-bold">RAG</span>
            <span className="text-sm text-gray-500">Глубокая память</span>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import { 
  Bot, 
  Database, 
  Brain, 
  Briefcase, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  ArrowRight,
  Menu,
  X,
  Play,
  Terminal,
  Cpu
} from 'lucide-react';

export default function AgencyLanding() {
  const [mobileMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      {/* Background Noise & Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 z-50">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight">
              Personal Intelligence
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-slate-400 hover:text-white transition hover:scale-105 transform duration-200">Продукты</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-400 hover:text-white transition hover:scale-105 transform duration-200">Кейсы</a>
            <a href="#academy" className="text-sm font-medium text-slate-400 hover:text-white transition hover:scale-105 transform duration-200">Академия</a>
            <button className="relative px-6 py-2.5 group overflow-hidden rounded-full">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative text-sm font-bold text-white">Нанять Агента</span>
            </button>
          </div>

          <button className="md:hidden text-white z-50 p-2" onClick={() => setMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 h-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#products" className="text-2xl font-bold" onClick={() => setMenuOpen(false)}>Продукты</a>
            <a href="#use-cases" className="text-2xl font-bold" onClick={() => setMenuOpen(false)}>Кейсы</a>
            <a href="#academy" className="text-2xl font-bold" onClick={() => setMenuOpen(false)}>Академия</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 px-6 z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-12 backdrop-blur-md animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">System Online v2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-10 leading-[1.1] md:leading-tight">
            Ваш Цифровой <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Штат Сотрудников
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed md:leading-normal font-light">
            Мы создаем персональные интеллекты. От универсальных ассистентов до приватных облачных нейросетей, которые работают, пока вы спите.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-5 text-lg font-bold bg-white text-black rounded-2xl hover:scale-105 transition transform duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3">
              Выбрать Агента <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats / Tech Stack */}
          <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-6 h-6 text-slate-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">24/7 Доступность</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-slate-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">100% Приватность</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Database className="w-6 h-6 text-slate-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">RAG Память</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Cpu className="w-6 h-6 text-slate-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">LLM Agnostic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Comparison */}
      <section id="products" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Выберите Уровень Интеллекта</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              От массового доступа к знаниям человечества до вашего личного цифрового бункера.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* SaaS Card */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-white/20 transition-all duration-500 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <Terminal className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">Universal Mind</h3>
                <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6">SaaS Решение</p>
                <p className="text-slate-400 leading-relaxed min-h-[80px]">
                  Мощный бот для ежедневных задач. Поиск, транскрибация голосовых, генерация контента. Доступен каждому.
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-5xl font-bold mb-8 text-white">$15 <span className="text-xl text-slate-500 font-normal">/ мес</span></div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4 text-slate-300">
                    <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                    <span>Голосовые заметки в текст (Whisper)</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-300">
                    <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                    <span>Web Search (Поиск в интернете)</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-300">
                    <CheckCircle className="w-6 h-6 text-blue-500 shrink-0" />
                    <span>Генерация контента и картинок</span>
                  </li>
                </ul>
                <button className="w-full py-5 rounded-2xl font-bold border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                  Подключить Universal
                </button>
              </div>
            </div>

            {/* Private Cloud Card */}
            <div className="relative bg-black rounded-[2.5rem] p-1">
              <div className="absolute -inset-1 bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 rounded-[2.6rem] blur-sm opacity-70"></div>
              <div className="relative h-full bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-6 py-2 rounded-bl-2xl">BEST CHOICE</div>
                
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl flex items-center justify-center text-purple-400 mb-8 border border-white/5">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Private Cloud</h3>
                  <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-6">Personal Managed Service</p>
                  <p className="text-slate-400 leading-relaxed min-h-[80px]">
                    Ваш личный сервер и полная приватность. Глубокая память на ваших данных. Интеграция с вашей жизнью.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="text-5xl font-bold mb-2 text-white">$300 <span className="text-xl text-slate-500 font-normal">/ мес</span></div>
                  <div className="text-sm text-slate-500 mb-8">+ $1000 Setup Fee (единоразово)</div>
                  
                  <ul className="space-y-5 mb-10">
                    <li className="flex items-start gap-4 text-white">
                      <Shield className="w-6 h-6 text-purple-500 shrink-0" />
                      <span className="font-medium">100% Приватность (Личный VPS)</span>
                    </li>
                    <li className="flex items-start gap-4 text-white">
                      <Database className="w-6 h-6 text-purple-500 shrink-0" />
                      <span className="font-medium">Глубокая память (RAG) на гигабайты</span>
                    </li>
                    <li className="flex items-start gap-4 text-white">
                      <Zap className="w-6 h-6 text-purple-500 shrink-0" />
                      <span className="font-medium">Интеграции (Notion, Email, Calendar)</span>
                    </li>
                    <li className="flex items-start gap-4 text-white">
                      <CheckCircle className="w-6 h-6 text-purple-500 shrink-0" />
                      <span className="font-medium">Персональная настройка и обучение</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-5 rounded-2xl font-bold bg-white text-black hover:bg-slate-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    Заказать Private Cloud
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Bento Grid Style */}
      <section id="use-cases" className="py-32 bg-gradient-to-b from-transparent to-slate-900/30 z-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Сценарии Использования</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition duration-300 min-h-[300px] flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500">
                <Briefcase className="w-40 h-40" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Для Бизнеса</h3>
              <p className="text-slate-400 text-lg relative z-10 max-w-md">
                Автоматизируйте рутину. Ваш AI-агент может обрабатывать заявки 24/7, онбордить новых сотрудников и анализировать отчеты.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Продажи</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">HR</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Поддержка</span>
              </div>
            </div>

            {/* Tall Card */}
            <div className="md:row-span-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-10 hover:border-white/20 transition duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 opacity-20 group-hover:opacity-40 transition-opacity">
                <Brain className="w-60 h-60" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-auto relative z-10">Для Жизни</h3>
              <p className="text-slate-400 text-lg relative z-10">
                Освободите мозг для творчества. Голосовые заметки мгновенно превращаются в задачи. Планирование меню и путешествий за секунды.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap relative z-10">
                <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-mono">Ассистент</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-mono">Планирование</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-mono">Креатив</span>
              </div>
            </div>

            {/* Medium Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition duration-300 min-h-[300px] flex flex-col justify-end relative overflow-hidden">
               <h3 className="text-2xl font-bold mb-4">Для Развития</h3>
              <p className="text-slate-400 text-lg">
                Персональный ментор, который помнит всё, что вы читали. Саммари книг, статей и видео. Подготовка к переговорам.
              </p>
               <div className="mt-6 flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Обучение</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Анализ</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Менторство</span>
              </div>
            </div>

            {/* Medium Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition duration-300 min-h-[300px] flex flex-col justify-end">
               <h3 className="text-2xl font-bold mb-4">Глобальный Поиск</h3>
              <p className="text-slate-400 text-lg">
                Не просто гуглит, а синтезирует ответ из десятков источников. Аналитика рынка и поиск редкой информации без рекламы.
              </p>
               <div className="mt-6 flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Research</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Аналитика</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono">Инсайты</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Teaser */}
      <section id="academy" className="py-32 border-t border-white/5 z-10 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-widest uppercase mb-6">
              Скоро запуск
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              AI Academy: <br/>
              <span className="text-slate-400">Управляйте своим будущим</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Мощный инструмент бесполезен, если не уметь им пользоваться. Мы не просто даем доступ к нейросетям — мы учим мыслить как AI-архитектор.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Промпт-инжиниринг для себя</h4>
                  <p className="text-slate-400">Научитесь ставить задачи так, чтобы получать идеальный результат с первого раза.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Библиотека Сценариев</h4>
                  <p className="text-slate-400">Готовые шаблоны: от написания писем до планирования стратегических сессий.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-8 py-4 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
              Записаться в лист ожидания
            </button>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-[#050505] border border-white/10 rounded-3xl aspect-video flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
              <p className="absolute bottom-8 font-mono text-sm tracking-widest uppercase opacity-70">Смотреть трейлер</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black z-10 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-6 h-6 text-white" />
                <span className="text-xl font-bold">Personal Intelligence</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Ваш партнер в мире искусственного интеллекта. Создаем цифровых сотрудников, которые работают на вас.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Продукты</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-white transition">Universal Mind</a></li>
                <li><a href="#" className="hover:text-white transition">Private Cloud</a></li>
                <li><a href="#" className="hover:text-white transition">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Компания</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-white transition">Академия</a></li>
                <li><a href="#" className="hover:text-white transition">О нас</a></li>
                <li><a href="#" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
            <p>© 2026 Personal Intelligence Provider. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

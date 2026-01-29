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
  Play
} from 'lucide-react';

export default function AgencyLanding() {
  const [mobileMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Personal Intelligence
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-slate-400 hover:text-white transition">Продукты</a>
            <a href="#use-cases" className="text-sm font-medium text-slate-400 hover:text-white transition">Кейсы</a>
            <a href="#academy" className="text-sm font-medium text-slate-400 hover:text-white transition">Академия</a>
            <button className="px-5 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-slate-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Нанять Агента
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Эра Agentic AI наступила</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Ваш Цифровой <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Штат Сотрудников</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Мы не продаем чат-ботов. Мы создаем автономных AI-агентов, которые помнят всё, работают 24/7 и живут на вашем личном сервере.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-white text-black rounded-2xl hover:bg-slate-200 transition flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Zap className="w-5 h-5" />
              Выбрать Агента
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Как это работает
            </button>
          </div>
        </div>
      </section>

      {/* Products Comparison */}
      <section id="products" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Два уровня интеллекта</h2>
            <p className="text-slate-400">Выберите решение под свои задачи</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SaaS Card */}
            <div className="group relative bg-black border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Universal Mind</h3>
                <div className="text-sm text-blue-400 font-mono mb-6 uppercase tracking-wider">SaaS Subscription</div>
                <p className="text-slate-400 mb-8 h-24">
                  Доступный каждому интеллект в Telegram. Идеально для фрилансеров и студентов. Поиск, генерация, базовые задачи.
                </p>
                <div className="text-4xl font-bold mb-8">$15 <span className="text-lg text-slate-500 font-normal">/ мес</span></div>
                
                <ul className="space-y-4 mb-8 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500" /> Web Search & Аналитика</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500" /> Работа с голосовыми (Whisper)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-blue-500" /> Генерация изображений</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-slate-600" /> <span className="text-slate-500">Общая память</span></li>
                </ul>
                
                <button className="w-full py-4 rounded-xl font-bold border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition">
                  Подключить Бота
                </button>
              </div>
            </div>

            {/* Private Cloud Card */}
            <div className="group relative bg-gradient-to-b from-slate-900 to-black border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/20">
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl">PREMIUM</div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Private Cloud Agent</h3>
                <div className="text-sm text-purple-400 font-mono mb-6 uppercase tracking-wider">Managed Service</div>
                <p className="text-slate-400 mb-8 h-24">
                  Ваш личный сервер. Полная изоляция данных (GDPR/HIPAA). Глубокая память (RAG) на ваших документах. Интеграция с Notion/Mail.
                </p>
                <div className="text-4xl font-bold mb-2">$300 <span className="text-lg text-slate-500 font-normal">/ мес</span></div>
                <div className="text-sm text-slate-500 mb-8">+ $1000 Setup Fee (единоразово)</div>
                
                <ul className="space-y-4 mb-8 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-purple-500" /> <strong>100% Приватность данных</strong></li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-purple-500" /> Личный VPS сервер</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-purple-500" /> База знаний (Ваши PDF, Docs)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-purple-500" /> Интеграции (n8n, Calendar)</li>
                </ul>
                
                <button className="w-full py-4 rounded-xl font-bold bg-white text-black hover:bg-purple-50 transition shadow-lg shadow-purple-500/20">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Кейсы применения</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <Brain className="w-10 h-10 text-pink-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Врачам</h3>
              <p className="text-slate-400 leading-relaxed">
                Агент, обученный на ваших протоколах лечения. Заполняет карты пациентов, помнит историю болезни, но данные никогда не покидают ваш защищенный контур.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <Briefcase className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Риелторам</h3>
              <p className="text-slate-400 leading-relaxed">
                Мгновенный ответ клиенту: "Скинь планировку ЖК Солнечный". Агент помнит каждый объект, цены и предпочтения клиентов за 2 года работы.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <Database className="w-10 h-10 text-cyan-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Топ-Менеджменту</h3>
              <p className="text-slate-400 leading-relaxed">
                "Второй мозг". Саммаризация встреч, подготовка брифов, поиск информации. Агент работает, пока вы спите, мониторя рынок и конкурентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Teaser */}
      <section id="academy" className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-white/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">AI Academy</h2>
            <p className="text-xl text-slate-300 mb-8">
              Мы не просто даем инструмент. Мы учим им пользоваться.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-400">
                <ArrowRight className="w-5 h-5 text-white" /> Курс "Промпт-инженер для себя"
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <ArrowRight className="w-5 h-5 text-white" /> Библиотека сценариев автоматизации
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <ArrowRight className="w-5 h-5 text-white" /> Закрытое комьюнити пользователей
              </li>
            </ul>
            <a href="#" className="text-white font-bold border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition">
              Перейти в Академию →
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-black border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <Play className="w-16 h-16 text-white opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <p className="mb-4">© 2026 Personal Intelligence Provider. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

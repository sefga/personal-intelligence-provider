import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 tracking-tighter">Personal Intelligence</h2>
            <p className="text-gray-500 max-w-xs mb-6">
              Ваш партнер в мире искусственного интеллекта. Создаем цифровых сотрудников, которые работают на вас.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Продукты</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Universal Mind</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Private Cloud</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Corporate Brain</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#academy" className="hover:text-white transition-colors">Академия</a></li>
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Personal Intelligence Provider. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

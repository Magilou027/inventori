import {
  ShoppingCart, Building2, Calculator, Receipt, Store,
} from 'lucide-react';
import type { OrbiboxStoreApp } from '../../types';

const OrbiboxStoreTab: React.FC = () => {
  const apps: OrbiboxStoreApp[] = [
    {
      name: 'Integrasi Marketplace',
      desc: 'Hubungkan pesanan dan stok otomatis dari Tokopedia, Shopee, TikTok Shop, dll.',
      icon: <ShoppingCart size={28} />,
      color: 'text-orange-500 bg-orange-100 dark:bg-orange-900/30',
    },
    {
      name: 'Smart manufaktur',
      desc: 'Kelola formula produksi, Work Order, dan pengalokasian biaya produksi tingkat lanjut.',
      icon: <Building2 size={28} />,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
    },
    {
      name: 'Orbibox POS',
      desc: 'Sistem kasir yang terintegrasi langsung dengan stok dan akuntansi Orbibox.',
      icon: <Calculator size={28} />,
      color: 'text-green-500 bg-green-100 dark:bg-green-900/30',
    },
    {
      name: 'Rene Integration',
      desc: 'Integrasi untuk sistem point of sales (POS) restoran dan retail.',
      icon: <Receipt size={28} />,
      color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-slate-900 relative transition-colors duration-300">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white">
        <div className="flex items-center space-x-3 mb-2">
          <Store className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Orbibox Store</h2>
        </div>
        <p className="text-blue-100 opacity-90 max-w-xl">
          Pasang modul dan aplikasi tambahan untuk memaksimalkan fitur Orbibox Online sesuai dengan kebutuhan spesifik bisnis Anda.
        </p>
      </div>
      <div className="p-8 flex-1 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-5 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className={`w-14 h-14 ${app.color} rounded-lg flex items-center justify-center mb-4`}>
                {app.icon}
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{app.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex-1 leading-relaxed mb-6">{app.desc}</p>
              <button className="w-full bg-white dark:bg-slate-700 border border-blue-600 dark:border-blue-500 text-blue-700 dark:text-blue-400 font-medium py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors text-sm">
                Install Aplikasi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrbiboxStoreTab;

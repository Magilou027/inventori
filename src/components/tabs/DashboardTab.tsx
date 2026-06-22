import {
  Plus, ChevronDown, ChevronLeft, ChevronRight,
  RefreshCcw, Trophy, Medal, User,
} from 'lucide-react';
import type { CustomerSalesItem, SellerPerformanceItem } from '../../types';

const DashboardTab: React.FC = () => {
  const customerSales: CustomerSalesItem[] = [
    { name: 'Bendian Koh', amount: 'Rp 1.936.937', pct: '20%', color: 'bg-teal-400', rank: 1, icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
    { name: 'Aaron Tanjaya', amount: 'Rp 1.801.802', pct: '18%', color: 'bg-yellow-400', rank: 2, icon: <Medal className="w-5 h-5 text-gray-400" /> },
    { name: 'Rosalia Chrestina', amount: 'Rp 1.261.261', pct: '13%', color: 'bg-blue-400', rank: 3, icon: <Medal className="w-5 h-5 text-amber-600" /> },
    { name: 'Desinta Dewi', amount: 'Rp 1.013.514', pct: '10%', color: 'bg-orange-400', rank: 4, icon: <span className="font-bold text-gray-400 ml-1.5 text-sm">4</span> },
  ];

  const sellerPerformance: SellerPerformanceItem[] = [
    { name: 'Ade', amount: 'Rp -', pct: '0%' },
    { name: 'Ajy BTR', amount: 'Rp 359.459', pct: '3%' },
    { name: 'Ajy GS', amount: 'Rp 1.463.063', pct: '14%' },
    { name: 'Ajy JB', amount: 'Rp -', pct: '0%' },
  ];

  return (
    <div className="p-4 bg-gray-100 dark:bg-slate-900 min-h-full space-y-4 transition-colors duration-300">
      {/* Top Filter */}
      <div className="flex justify-between items-center mb-2">
        <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded shadow-sm px-3 py-1.5 text-sm flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
          <Plus className="w-4 h-4" /> <span>Widget</span>
        </button>
        <div className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded shadow-sm px-3 py-1.5 text-sm flex items-center justify-between min-w-[250px] cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 dark:text-gray-200 transition-colors duration-300">
          <span>Dashboard Utama</span>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {/* Aktifitas Terakhir */}
        <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col h-[300px] transition-colors duration-300">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
              Aktifitas Terakhir Anda <span className="font-normal text-xs text-gray-500 dark:text-gray-400">(pemmztechie@pemmz.com)</span>
            </h3>
            <RefreshCcw className="w-4 h-4 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="flex mb-4">
              <div className="w-16 text-center text-gray-500 dark:text-gray-400 font-medium border-r border-gray-200 dark:border-slate-700 pr-2 relative">
                <span className="text-xs">Kemarin</span><br />
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">02</span><br />
                <span className="text-sm">Mei</span>
                <div className="absolute top-0 right-[-5px] w-2 h-2 rounded-full border-2 border-blue-400 bg-white dark:bg-slate-800"></div>
              </div>
              <div className="pl-4 space-y-4">
                {[
                  { time: '16:02', text: 'Buat Faktur Penjualan SI.2026.05.00008' },
                  { time: '16:01', text: 'Buat Pengiriman Pesanan DO.2026.05.00008' },
                  { time: '16:01', text: 'Buat Pesanan Penjualan SO.2026.05.00009' },
                ].map((activity, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-[-23px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-bold">{activity.time}</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{activity.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kegiatan Mendatang */}
        <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col h-[300px] transition-colors duration-300">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Kegiatan Mendatang</h3>
            <RefreshCcw className="w-4 h-4 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
          <div className="p-4 flex-1 flex items-center justify-center text-gray-400 dark:text-gray-500 italic text-sm">
            Tidak ada kegiatan
          </div>
        </div>

        {/* Tren Penjualan Chart */}
        <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col h-[300px] transition-colors duration-300">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
              Tren Penjualan <span className="font-normal text-xs text-gray-500 dark:text-gray-400">(Semua Cabang)</span>
            </h3>
            <RefreshCcw className="w-4 h-4 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
          <div className="p-4 flex-1 relative">
            <div className="absolute top-2 right-4 text-xs text-gray-400 dark:text-gray-500">(Seminggu terakhir)</div>
            <div className="h-full w-full mt-4 relative">
              <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>40 jt</span><span>20 jt</span><span>0</span>
              </div>
              <div className="absolute left-10 right-0 top-2 border-b border-gray-100 dark:border-slate-700"></div>
              <div className="absolute left-10 right-0 top-[45%] border-b border-gray-100 dark:border-slate-700"></div>
              <div className="absolute left-10 right-0 bottom-6 border-b border-gray-300 dark:border-slate-600"></div>
              <div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-2">
                <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Kem</span><span>Hari ini</span>
              </div>
              <div className="absolute left-10 right-0 top-0 bottom-6">
                <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <polyline points="10,100 70,20 130,140 190,110 250,135 310,100 370,140" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="10" cy="100" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="70" cy="20" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="130" cy="140" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="190" cy="110" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="250" cy="135" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="310" cy="100" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                  <circle cx="370" cy="140" r="4" fill="#3b82f6" className="cursor-pointer transition-all hover:r-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Penjualan Pelanggan */}
        <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col h-[280px] transition-colors duration-300">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
              Penjualan Pelanggan <span className="font-normal text-xs text-gray-500 dark:text-gray-400">(Semua Cabang)</span>
            </h3>
            <RefreshCcw className="w-4 h-4 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
          <div className="p-4">
            <div className="flex justify-end items-center text-xs text-blue-800 dark:text-blue-400 space-x-2 mb-4">
              <ChevronLeft className="w-3 h-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 rounded" />
              <span>1 Mei - 3 Mei 2026</span>
              <ChevronRight className="w-3 h-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 rounded" />
            </div>
            {customerSales.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold dark:text-gray-200">{item.amount}</span>
                    <span className="bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-[10px] border border-blue-100 dark:border-blue-800">{item.pct}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden ml-7" style={{ width: 'calc(100% - 28px)' }}>
                  <div className={`${item.color} h-full`} style={{ width: item.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performa Penjual */}
        <div className="bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 shadow-sm flex flex-col h-[280px] transition-colors duration-300">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">
              Performa Penjual <span className="font-normal text-xs text-gray-500 dark:text-gray-400">(Semua Cabang)</span>
            </h3>
            <RefreshCcw className="w-4 h-4 text-gray-400 dark:text-gray-500 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2">
              <span>Penjual</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-blue-800 dark:text-blue-400 space-x-1 mb-1 font-normal">
                  <ChevronLeft className="w-3 h-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 rounded" />
                  <span>1 Mei - 3 Mei 2026</span>
                  <ChevronRight className="w-3 h-3 cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 rounded" />
                </div>
                <span>Total Penjualan</span>
              </div>
            </div>
            {sellerPerformance.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 dark:border-slate-700 last:border-0">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-700 dark:text-gray-300">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs dark:text-gray-300">
                  <span>{item.amount}</span>
                  <span className="bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded text-[10px] border border-blue-100 dark:border-blue-800 w-8 text-center">{item.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;

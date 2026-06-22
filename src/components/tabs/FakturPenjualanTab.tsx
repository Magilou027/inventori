import {
  Save, Printer, Paperclip, ChevronDown, Search, FileText,
} from 'lucide-react';

const inputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-3 py-1.5 text-sm focus:border-blue-500 outline-none transition-colors duration-300';

const FakturPenjualanTab: React.FC = () => (
  <div className="flex flex-col h-full bg-gray-100 dark:bg-slate-900 relative transition-colors duration-300">
    <div className="absolute right-4 top-4 flex flex-col space-y-2 z-10">
      <button className="bg-slate-800 text-white p-2.5 rounded shadow hover:bg-slate-700 flex items-center justify-center">
        <Save className="w-5 h-5" />
      </button>
      <button className="bg-blue-600 text-white p-2.5 rounded shadow hover:bg-blue-500 flex items-center justify-center">
        <Printer className="w-5 h-5" />
      </button>
      <button className="bg-blue-600 text-white p-2.5 rounded shadow hover:bg-blue-500 flex items-center justify-center relative">
        <Paperclip className="w-5 h-5" />
        <span className="absolute bottom-1 right-1">
          <ChevronDown className="w-3 h-3" />
        </span>
      </button>
      <button className="bg-blue-600 text-white p-2.5 rounded shadow hover:bg-blue-500 flex items-center justify-center">
        <FileText className="w-5 h-5" />
      </button>
    </div>

    <div className="bg-[#f1f5f9] dark:bg-slate-800 border-b border-gray-300 dark:border-slate-700 p-6 shadow-sm pb-4 transition-colors duration-300">
      <div className="max-w-5xl grid grid-cols-2 gap-x-12 gap-y-3">
        <div className="flex items-center space-x-3">
          <label className="w-1/4 text-sm font-semibold text-gray-700 dark:text-gray-200">Pelanggan</label>
          <div className="relative flex-1">
            <input type="text" className={inputClass} placeholder="Cari/Pilih Pelanggan..." />
            <Search className="w-4 h-4 absolute right-3 top-2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-3">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-right w-20">No Faktur #</label>
          <div className="flex items-center bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded px-3 py-1.5 transition-colors duration-300">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-700 rounded mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Faktur Penjualan Jakbar</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <label className="w-1/4 text-sm font-semibold text-gray-700 dark:text-gray-200">Tanggal</label>
          <div className="relative flex-1 flex space-x-2">
            <div className="relative w-full">
              <input type="date" defaultValue="2026-05-03" className={inputClass} />
            </div>
            <div className="w-8"></div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <button className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded px-4 py-1.5 text-sm font-medium flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 transition-colors duration-300">
            <span>Ambil</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded px-4 py-1.5 text-sm font-medium flex items-center hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 transition-colors duration-300">
            <span>Proses</span>
          </button>
        </div>
      </div>
    </div>

    <div className="flex-1 bg-white dark:bg-slate-800 flex flex-col transition-colors duration-300">
      <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between transition-colors duration-300">
        <div className="relative w-1/2 max-w-lg flex items-center">
          <Search className="w-5 h-5 absolute left-3 text-gray-400 dark:text-gray-500" />
          <input type="text" className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300" placeholder="Cari/Pilih Barang & Jasa..." />
        </div>
        <button className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 rounded px-4 py-2 text-sm font-medium flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
          <Search className="w-4 h-4" />
          <span>Rincian Barang</span>
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full border-b border-gray-200 dark:border-slate-700">
          <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
            <tr>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Kode #</th>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Nama Barang</th>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Kuantitas</th>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Satuan</th>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">@Harga</th>
              <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Diskon</th>
              <th className="py-2.5 px-4 text-left font-medium">Total Harga</th>
            </tr>
          </thead>
          <tbody className="dark:bg-slate-800">
            <tr>
              <td colSpan={7} className="text-center py-20 text-sm text-gray-500 dark:text-gray-400">Belum ada data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-white dark:bg-slate-800 border-t border-gray-300 dark:border-slate-700 py-3 px-8 flex justify-end shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300">
      <div className="w-1/3 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Sub Total</span>
          <span className="font-semibold text-gray-800 dark:text-gray-200">0</span>
        </div>
        <div className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-slate-700 pb-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Diskon (%)</span>
            <input type="text" className="border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded w-16 px-2 py-0.5 text-right focus:border-blue-500 outline-none transition-colors duration-300" defaultValue="0" />
          </div>
          <span className="font-semibold text-gray-800 dark:text-gray-200">0</span>
        </div>
        <div className="flex justify-between items-center text-lg mt-2 pt-1">
          <span className="text-gray-800 dark:text-gray-100 font-bold">Total</span>
          <span className="font-bold text-gray-900 dark:text-white">0</span>
        </div>
      </div>
    </div>
  </div>
);

export default FakturPenjualanTab;

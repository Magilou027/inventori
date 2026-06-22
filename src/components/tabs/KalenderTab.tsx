import { Plus, Calendar as CalendarIcon } from 'lucide-react';

const KalenderTab: React.FC = () => (
  <div className="flex flex-col h-full bg-white dark:bg-slate-800 transition-colors duration-300">
    <div className="bg-white dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center shadow-sm transition-colors duration-300">
      <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 flex items-center space-x-2">
        <CalendarIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <span>Kalender Perusahaan</span>
      </h3>
      <button className="bg-green-600 text-white px-4 py-2 rounded shadow-sm text-sm font-medium flex items-center space-x-2 hover:bg-green-700">
        <Plus className="w-4 h-4" /> <span>Hari Libur Baru</span>
      </button>
    </div>
    <div className="flex-1 p-8 flex items-center justify-center bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="text-center max-w-md">
        <CalendarIcon className="w-20 h-20 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">Kelola Hari Libur & Jam Kerja</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Tentukan hari libur nasional atau cuti bersama untuk disesuaikan dengan perhitungan gaji dan jatuh tempo tagihan.
        </p>
      </div>
    </div>
  </div>
);

export default KalenderTab;

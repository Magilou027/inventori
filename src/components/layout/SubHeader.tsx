import { LayoutDashboard, HelpCircle, X } from 'lucide-react';
import type { SubHeaderProps } from '../../types';

const SubHeader: React.FC<SubHeaderProps> = ({ activeTabId }) => {
  if (activeTabId === 'dashboard') return null;

  return (
    <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center px-2 py-1 shadow-sm relative z-0 transition-colors duration-300">
      <button
        className={`p-1.5 rounded mr-2 shadow-sm text-white ${
          activeTabId === 'pelanggan' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <LayoutDashboard className="w-4 h-4" />
      </button>

      <div className="flex bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="px-3 py-1 border border-gray-300 border-b-white bg-white dark:bg-slate-800 dark:text-gray-200 dark:border-slate-600 dark:border-b-slate-800 text-sm font-medium flex items-center space-x-2 rounded-t z-10 translate-y-[1px]">
          <span>{activeTabId === 'pelanggan' ? 'Data Baru' : 'Modul Aktif'}</span>
          <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>
      <div className="flex-1"></div>
      <button className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 shadow-sm mr-2">
        <HelpCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SubHeader;

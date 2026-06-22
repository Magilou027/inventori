import { X } from 'lucide-react';
import type { TabBarProps } from '../../types';

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTabId, setActiveTabId, closeTab }) => (
  <div className="bg-[#f8f9fa] dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 flex items-end px-2 pt-2 space-x-1 overflow-x-auto shadow-sm transition-colors duration-300">
    {tabs.map((tab) => {
      const isActive = activeTabId === tab.id;
      return (
        <div
          key={tab.id}
          onClick={() => setActiveTabId(tab.id)}
          className={`
            group relative px-4 py-1.5 text-sm flex items-center cursor-pointer border-t border-r border-l rounded-t-md min-w-[120px] max-w-[200px] transition-colors duration-300
            ${
              isActive
                ? 'bg-blue-900 text-white border-blue-900 dark:bg-blue-800 dark:border-blue-800'
                : 'bg-[#e9ecef] text-gray-600 border-gray-300 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:border-slate-600 dark:hover:bg-slate-600'
            }
          `}
        >
          {tab.icon && (
            <span className={isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}>{tab.icon}</span>
          )}
          <span className="truncate flex-1 font-medium">{tab.title}</span>
          {tab.id !== 'dashboard' && (
            <X
              onClick={(e) => closeTab(e, tab.id)}
              className={`w-3.5 h-3.5 ml-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${
                isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'
              }`}
            />
          )}
        </div>
      );
    })}
    <div className="flex-1 border-b border-gray-200 dark:border-slate-700 h-full transition-colors duration-300"></div>
  </div>
);

export default TabBar;

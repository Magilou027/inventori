import { type ReactNode, useState, useMemo } from 'react';
import { Search, Plus, Package } from 'lucide-react';

export interface ColumnDef<T> {
  header: string;
  accessorKey: keyof T;
}

interface TabelModulGenerikProps<T> {
  title: string;
  icon: ReactNode;
  columns: ColumnDef<T>[];
  data: T[];
}

const TabelModulGenerik = <T extends Record<string, unknown>>({ title, icon, columns, data }: TabelModulGenerikProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(row =>
      Object.values(row).some(cellValue =>
        String(cellValue).toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, data]);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center shadow-sm transition-colors duration-300">
        <div className="flex items-center space-x-3">
        {icon}
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              className="w-full pl-9 pr-4 py-1.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
              placeholder={`Cari di ${title}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => alert(`Fitur "Data Baru" untuk modul "${title}" sedang dalam pengembangan.`)}
            className="bg-green-600 text-white px-4 py-2 rounded shadow-sm text-sm font-medium flex items-center space-x-2 hover:bg-green-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> <span>Data Baru</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 p-6 transition-colors duration-300">
        {filteredData.length > 0 ? (
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
            <table className="w-full">
              <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
                <tr>
                  {columns.map((col) => (
                    <th key={String(col.accessorKey)} className="py-3 px-4 text-left font-medium border-r border-white/20 last:border-r-0">{col.header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="dark:bg-slate-800">
                {filteredData.map((row, rowIndex) => (
                  <tr key={rowIndex} className={`border-b border-gray-100 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors ${rowIndex % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50/50 dark:bg-slate-800/50'}`}>
                    {columns.map((col) => (
                      <td key={String(col.accessorKey)} className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{String(row[col.accessorKey])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
            <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-semibold">Tidak Ada Data</h3>
            <p className="max-w-xs">Tidak ada data yang cocok dengan pencarian Anda, atau belum ada data yang ditambahkan pada modul ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabelModulGenerik;

import { ChevronDown } from 'lucide-react';
import type { SelectRowProps } from '../../types';

const SelectRow: React.FC<SelectRowProps> = ({
  label,
  required = false,
  placeholder,
  value,
}) => (
  <div className="flex items-center mb-3">
    <label className={`w-1/3 text-sm text-gray-600 dark:text-gray-300 ${required ? 'font-semibold' : ''}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="w-2/3 relative">
      <div className="w-full border border-gray-300 dark:border-slate-600 rounded px-2 py-1.5 text-sm bg-white dark:bg-slate-700 flex justify-between items-center cursor-pointer transition-colors duration-300">
        <span className="text-gray-500 dark:text-gray-400">{value || placeholder}</span>
        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  </div>
);

export default SelectRow;

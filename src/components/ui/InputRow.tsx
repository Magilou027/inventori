import { ChevronDown } from 'lucide-react';
import type { InputRowProps } from '../../types';

const InputRow: React.FC<InputRowProps> = ({
  label,
  required = false,
  placeholder,
  type = 'text',
  rightIcon,
  defaultValue,
}) => (
  <div className="flex items-center mb-3">
    <label className={`w-1/3 text-sm text-gray-600 dark:text-gray-300 ${required ? 'font-semibold' : ''}`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="w-2/3 relative flex items-center">
      {type === 'toggle' ? (
        <div className="flex items-center space-x-2 w-full">
          <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1 cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full translate-x-5 transition-transform"></div>
          </div>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          <ChevronDown className="absolute right-2 text-gray-400 dark:text-gray-500 w-4 h-4 cursor-pointer" />
        </div>
      ) : (
        <div className="relative w-full">
          <input
            type={type}
            className="w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
          {rightIcon && <div className="absolute right-2 top-2">{rightIcon}</div>}
        </div>
      )}
    </div>
  </div>
);

export default InputRow;

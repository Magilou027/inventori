import { useState } from 'react';
import {
  Save, Printer, Paperclip, ChevronDown, Search, FileText, Calculator, Info,
} from 'lucide-react';

const UangMukaTab: React.FC = () => {
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [uangMuka, setUangMuka] = useState<string>('0');

  const handleSave = () => {
    if (hasChanges) {
      alert('Data uang muka penjualan berhasil disimpan!');
      setHasChanges(false);
    }
  };

  const totalValue = Number(uangMuka) || 0;
  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(totalValue);

  const inputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-3 py-1.5 text-sm focus:border-blue-500 outline-none transition-colors duration-300';

  return (
  <div className="flex flex-col h-full bg-gray-100 dark:bg-slate-900 relative transition-colors duration-300" onChange={() => setHasChanges(true)}>
    <div className="absolute right-4 top-4 flex flex-col space-y-2 z-10">
      <button
        onClick={handleSave}
        className={`${hasChanges ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-700'} text-white p-2.5 rounded shadow flex items-center justify-center transition-colors`}
        title="Simpan Perubahan"
      >
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

    <div className="bg-[#f1f5f9] dark:bg-slate-800 border-b border-gray-300 dark:border-slate-700 p-6 shadow-sm transition-colors duration-300">
      <div className="max-w-4xl grid grid-cols-2 gap-x-12 gap-y-4">
        <div className="flex items-center space-x-3">
          <label className="w-1/4 text-sm font-semibold text-gray-700 dark:text-gray-200">Pelanggan</label>
          <div className="relative flex-1">
            <input type="text" className={inputClass} placeholder="Cari/Pilih Pelanggan..." />
            <Search className="w-4 h-4 absolute right-3 top-2 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari data pelanggan...')} />
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
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              alert('Memproses uang muka...');
              setUangMuka('0');
            }}
            className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded px-4 py-1.5 text-sm font-medium flex items-center hover:bg-gray-50 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            <span>Proses</span>
          </button>
        </div>
      </div>
    </div>

    <div className="flex-1 bg-white dark:bg-slate-800 p-6 overflow-y-auto transition-colors duration-300">
      <div className="max-w-4xl border border-gray-200 dark:border-slate-700 rounded transition-colors duration-300">
        <div className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between cursor-pointer transition-colors duration-300">
          <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-400 font-medium">
            <FileText className="w-5 h-5" />
            <span>Uang Muka</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
        </div>
        <div className="p-6 grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-200">Uang Muka</label>
              <div className="w-2/3 flex relative">
                <input
                  type="text"
                  className={`${inputClass} text-right`}
                  value={uangMuka}
                  onChange={(e) => setUangMuka(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="0"
                />
                <Calculator className="w-4 h-4 absolute right-3 top-2 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-200">No. PO</label>
              <input type="text" className={`w-2/3 ${inputClass}`} />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center">
                Pajak <Info className="w-3.5 h-3.5 ml-1 text-gray-400" />
              </label>
              <div className="w-2/3 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-700" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Kena Pajak</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-700" defaultChecked />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Total termasuk Pajak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white dark:bg-slate-800 border-t border-gray-300 dark:border-slate-700 py-3 px-8 flex justify-end shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300">
      <div className="w-1/3 space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Sub Total</span>
          <span className="font-semibold text-gray-800 dark:text-gray-200">{formattedTotal}</span>
        </div>
        <div className="flex justify-between items-center text-lg mt-2">
          <span className="text-gray-800 dark:text-gray-100 font-bold">Total</span>
          <span className="font-bold text-gray-900 dark:text-white">{formattedTotal}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UangMukaTab;

import { useState } from 'react';
import { Save, Settings2 } from 'lucide-react';
import InputRow from '../ui/InputRow';

const PengaturanTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('info');
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  const handleSave = () => {
    if (hasChanges) {
      alert('Preferensi Perusahaan berhasil disimpan!');
      setHasChanges(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <div onChange={() => setHasChanges(true)}>
            <h3 className="text-blue-700 dark:text-blue-400 font-medium mb-6 text-lg border-b border-gray-100 dark:border-slate-700 pb-2">
              Informasi Dasar
            </h3>
            <InputRow label="Nama Perusahaan" required defaultValue="PT. Pemindo Sukses Sejahtera" />
            <div className="flex items-center mb-3">
              <label className="w-1/3 text-sm text-gray-600 dark:text-gray-300">Kategori Usaha</label>
              <select className="w-2/3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none" defaultValue="Perdagangan (Eceran & Grosir)">
                <option value="Perdagangan (Eceran & Grosir)">Perdagangan (Eceran & Grosir)</option>
                <option value="Jasa">Jasa</option>
                <option value="Manufaktur">Manufaktur</option>
                <option value="Food & Beverage">Food & Beverage</option>
              </select>
            </div>
            <div className="flex items-start mb-3">
              <label className="w-1/3 text-sm text-gray-600 dark:text-gray-300">Alamat</label>
              <textarea
                className="w-2/3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none h-20"
                defaultValue="Jl. Tanjung Duren Raya"
              ></textarea>
            </div>
            <InputRow label="No. Telepon" defaultValue="021-1234567" />
            <InputRow label="Email Perusahaan" defaultValue="pemmztechie@pemmz.com" />
            <div className="flex items-center mb-3">
              <label className="w-1/3 text-sm text-gray-600 dark:text-gray-300">Format Tanggal</label>
              <select className="w-2/3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none" defaultValue="DD/MM/YYYY">
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        );
      case 'fitur':
        return (
          <>
            <h3 className="text-blue-700 dark:text-blue-400 font-medium mb-6 text-lg border-b border-gray-100 dark:border-slate-700 pb-2">
              Fitur Dasar
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Gunakan Mata Uang Asing (Multi Currency)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Pencatatan Proyek / Departemen</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Persetujuan Transaksi (Approval)</span>
              </div>
            </div>
          </>
        );
      case 'penjualan':
        return (
          <>
            <h3 className="text-blue-700 dark:text-blue-400 font-medium mb-6 text-lg border-b border-gray-100 dark:border-slate-700 pb-2">
              Penjualan
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Penawaran Penjualan (Quotation)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Pesanan Penjualan (Sales Order)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Pengiriman Barang (Delivery Order)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Target Penjualan (Sales Target)</span>
              </div>
            </div>
          </>
        );
      case 'pembelian':
        return (
          <>
            <h3 className="text-blue-700 dark:text-blue-400 font-medium mb-6 text-lg border-b border-gray-100 dark:border-slate-700 pb-2">
              Pembelian
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Permintaan Barang (Purchase Requisition)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Pesanan Pembelian (Purchase Order)</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700 dark:text-gray-300">Penerimaan Barang (Receive Item)</span>
              </div>
            </div>
          </>
        );
      case 'pajak':
        return (
          <>
            <h3 className="text-blue-700 dark:text-blue-400 font-medium mb-6 text-lg border-b border-gray-100 dark:border-slate-700 pb-2">
              Pajak
            </h3>
            <div className="space-y-4">
              <InputRow label="NPWP Perusahaan" defaultValue="01.234.567.8-901.000" />
              <InputRow label="NPPKP" defaultValue="01.234.567.8-901.000" />
              <div className="flex items-start mb-3">
                <label className="w-1/3 text-sm text-gray-600 dark:text-gray-300">Alamat Pajak</label>
                <textarea
                  className="w-2/3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none h-20"
                  defaultValue="Sama dengan alamat perusahaan"
                ></textarea>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-slate-900 relative">
      <div className="absolute right-4 top-4 flex flex-col space-y-2 z-10">
        <button
          onClick={handleSave}
          className={`${hasChanges ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-700'} text-white p-2.5 rounded shadow flex items-center justify-center transition-colors`}
          title="Simpan Perubahan"
        >
          <Save className="w-5 h-5" />
        </button>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 border-b border-gray-200 dark:border-slate-700">
        <div className="flex items-center space-x-3 text-blue-700 dark:text-blue-400">
          <Settings2 className="w-6 h-6" />
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Preferensi Perusahaan</h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Konfigurasikan informasi dasar dan fitur yang digunakan oleh database perusahaan ini.
        </p>
      </div>
      <div className="p-6 flex-1 overflow-auto">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded shadow-sm max-w-4xl flex">
          <div className="w-1/4 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 p-4 space-y-2">
            <div
              onClick={() => setActiveTab('info')}
              className={`px-3 py-2 font-medium rounded text-sm cursor-pointer ${
                activeTab === 'info'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Info Perusahaan
            </div>
            <div
              onClick={() => setActiveTab('fitur')}
              className={`px-3 py-2 font-medium rounded text-sm cursor-pointer ${
                activeTab === 'fitur'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Fitur Dasar
            </div>
            <div
              onClick={() => setActiveTab('penjualan')}
              className={`px-3 py-2 font-medium rounded text-sm cursor-pointer ${
                activeTab === 'penjualan'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Penjualan
            </div>
            <div
              onClick={() => setActiveTab('pembelian')}
              className={`px-3 py-2 font-medium rounded text-sm cursor-pointer ${
                activeTab === 'pembelian'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Pembelian
            </div>
            <div
              onClick={() => setActiveTab('pajak')}
              className={`px-3 py-2 font-medium rounded text-sm cursor-pointer ${
                activeTab === 'pajak'
                  ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              Pajak
            </div>
          </div>
          <div className="w-3/4 p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengaturanTab;

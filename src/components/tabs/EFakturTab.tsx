import { useState } from 'react';
import { FileBox, FileOutput, Loader2 } from 'lucide-react';

const selectClass = 'border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-3 py-2 text-sm focus:border-purple-500 transition-colors duration-300';

const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const YEARS = Array.from({ length: 5 }, (_, i) => (new Date().getFullYear() + 1 - i).toString());

const EFakturTab: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(MONTHS[new Date().getMonth()]);
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
  const [taxType, setTaxType] = useState<'keluaran' | 'masukan'>('keluaran');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);

    // Simulasi proses ekspor
    setTimeout(() => {
      let headers: string[];
      let data: string[][];
      let filenamePrefix: string;

      if (taxType === 'keluaran') {
        filenamePrefix = 'pajak_keluaran';
        headers = ['FK', 'KD_JENIS_TRANSAKSI', 'FG_PENGGANTI', 'NOMOR_FAKTUR', 'MASA_PAJAK', 'TAHUN_PAJAK', 'TANGGAL_FAKTUR', 'NPWP', 'NAMA', 'ALAMAT_LENGKAP', 'JUMLAH_DPP', 'JUMLAH_PPN', 'JUMLAH_PPNBM', 'ID_KETERANGAN_TAMBAHAN', 'FG_UANG_MUKA', 'UANG_MUKA_DPP', 'UANG_MUKA_PPN', 'UANG_MUKA_PPNBM', 'REFERENSI'];
        data = [
          ['FK', '01', '0', '0100002600000001', (MONTHS.indexOf(selectedMonth) + 1).toString(), selectedYear, `03/05/${selectedYear}`, '012345678901234', 'Bendian Koh', 'Jl. Meruya Ilir Raya No.88', '1760852', '193694', '0', '0', '0', '0', '0', '0', 'Faktur Penjualan #SI.2026.05.00008'],
        ];
      } else {
        filenamePrefix = 'pajak_masukan';
        headers = ['FM', 'KD_JENIS_TRANSAKSI', 'FG_PENGGANTI', 'NOMOR_FAKTUR', 'MASA_PAJAK', 'TAHUN_PAJAK', 'TANGGAL_FAKTUR', 'NPWP', 'NAMA', 'ALAMAT_LENGKAP', 'JUMLAH_DPP', 'JUMLAH_PPN', 'JUMLAH_PPNBM', 'IS_CREDITABLE'];
        data = [
          ['FM', '01', '0', '0109872600000001', (MONTHS.indexOf(selectedMonth) + 1).toString(), selectedYear, `01/05/${selectedYear}`, '098765432109876', 'PT. Komputer Jaya', 'Jl. Mangga Dua Raya', '250000000', '27500000', '0', '1'],
        ];
      }

      const csvRows = [
        headers.join(','),
        ...data.map(row => row.join(','))
      ];

      const csvString = csvRows.join('\n');
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        const monthIndex = (MONTHS.indexOf(selectedMonth) + 1).toString().padStart(2, '0');
        link.setAttribute('href', url);
        link.setAttribute('download', `${filenamePrefix}_${monthIndex}_${selectedYear}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setIsExporting(false);
    }, 1000); // Simulasi waktu tunggu 1 detik
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-slate-900 relative p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto w-full bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 transition-colors duration-300">
        <div className="flex items-center space-x-4 mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
            <FileBox className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Ekspor e-Faktur Legacy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ekspor data pajak keluaran dan masukan ke format CSV untuk aplikasi DJP.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-sm font-semibold text-gray-700 dark:text-gray-200">Masa Pajak</label>
            <div className="w-2/3 flex space-x-2">
              <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className={`w-1/2 ${selectClass}`}>
                {MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
              </select>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className={`w-1/2 ${selectClass}`}>
                {YEARS.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-sm font-semibold text-gray-700 dark:text-gray-200">Tipe Pajak</label>
            <div className="w-2/3 space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio" name="tax_type" id="keluaran"
                  checked={taxType === 'keluaran'}
                  onChange={() => setTaxType('keluaran')}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="keluaran" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">Pajak Keluaran (Faktur Penjualan)</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio" name="tax_type" id="masukan"
                  checked={taxType === 'masukan'}
                  onChange={() => setTaxType('masukan')}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="masukan" className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">Pajak Masukan (Faktur Pembelian)</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-end">
          <button onClick={handleExport} disabled={isExporting} className="bg-purple-600 text-white px-6 py-2.5 rounded-lg shadow-md font-medium flex items-center space-x-2 hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed w-48 justify-center">
            {isExporting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><FileOutput className="w-4 h-4" /><span>Ekspor ke CSV</span></>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EFakturTab;

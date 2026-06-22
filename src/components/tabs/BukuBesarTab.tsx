import { useState } from 'react';
import {
  BookOpen, Printer, ChevronDown, Loader2, FileDown,
} from 'lucide-react';
import type { Akun } from '../../App';

const inputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-3 py-1.5 text-sm transition-colors duration-300';

interface LaporanItem {
  tanggal: string;
  noBukti: string;
  keterangan: string;
  debit: number;
  kredit: number;
  saldo: number;
}

interface BukuBesarTabProps {
  dataAkun: Akun[];
}

const BukuBesarTab: React.FC<BukuBesarTabProps> = ({ dataAkun }) => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];

  const [akun, setAkun] = useState('semua');
  const [startDate, setStartDate] = useState(firstDayOfMonth);
  const [endDate, setEndDate] = useState(lastDayOfMonth);
  const [laporanData, setLaporanData] = useState<LaporanItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const formatCurrency = (value: number) => new Intl.NumberFormat('id-ID').format(value);

  const handleTampilkanLaporan = () => {
    setIsLoading(true);
    setLaporanData(null);

    // Simulasi pengambilan data dari API
    setTimeout(() => {
      // Contoh data dummy
      const mockData: LaporanItem[] = [
        { tanggal: '2026-05-01', noBukti: 'JV-001', keterangan: 'Saldo Awal Kas Utama', debit: 125500000, kredit: 0, saldo: 125500000 },
        { tanggal: '2026-05-03', noBukti: 'SI-001', keterangan: 'Penjualan kepada PT. ABC', debit: 0, kredit: 15000000, saldo: 110500000 },
        { tanggal: '2026-05-05', noBukti: 'PI-001', keterangan: 'Pembelian ATK', debit: 750000, kredit: 0, saldo: 109750000 },
        { tanggal: '2026-05-10', noBukti: 'CR-001', keterangan: 'Penerimaan Pelunasan Piutang', debit: 0, kredit: 10000000, saldo: 99750000 },
        { tanggal: '2026-05-15', noBukti: 'CD-001', keterangan: 'Pembayaran Gaji Karyawan', debit: 25000000, kredit: 0, saldo: 74750000 },
      ];

      // Filter data berdasarkan akun (simulasi)
      if (akun === 'semua' || akun === '1101.01') {
        setLaporanData(mockData);
      } else {
        setLaporanData([]); // Data kosong jika akun lain dipilih
      }

      setIsLoading(false);
    }, 1500);
  };

  const handleExportCSV = () => {
    if (!laporanData || laporanData.length === 0) {
      alert('Tidak ada data untuk diekspor.');
      return;
    }

    const headers = ['Tanggal', 'No. Bukti', 'Keterangan', 'Debit', 'Kredit', 'Saldo'];
    const csvRows = [
      headers.join(','),
      ...laporanData.map(row => 
        [
          row.tanggal,
          `"${row.noBukti}"`,
          `"${row.keterangan.replace(/"/g, '""')}"`,
          row.debit,
          row.kredit,
          row.saldo
        ].join(',')
      )
    ];

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `buku_besar_${akun}_${startDate}_sd_${endDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="bg-[#f8f9fa] dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700 flex flex-col space-y-4 shadow-sm z-10 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-blue-800 dark:text-blue-400 flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Laporan Buku Besar (General Ledger)</span>
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={handleExportCSV}
              className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-3 py-2 rounded shadow-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300 text-sm font-medium flex items-center space-x-2"
            >
              <FileDown className="w-4 h-4" /> <span>CSV</span>
            </button>
            <button onClick={handleTampilkanLaporan} className="bg-blue-600 text-white px-4 py-2 rounded shadow-sm text-sm font-medium hover:bg-blue-700 w-36">
              {isLoading ? <Loader2 className="w-4 h-4 mx-auto animate-spin" /> : 'Tampilkan Laporan'}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-white dark:bg-slate-700 p-3 border border-gray-200 dark:border-slate-600 rounded transition-colors duration-300">
          <div className="flex items-center space-x-2 w-1/3">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 w-24">Pilih Akun:</label>
            <div className="relative flex-1">
              <select
                className={`${inputClass} appearance-none`}
                value={akun}
                onChange={(e) => setAkun(e.target.value)}
              >
                <option value="semua">Semua Akun</option>
                {dataAkun.map((item) => (
                  <option key={item.no} value={item.no}>{`${item.no} - ${item.nama}`}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div className="flex items-center space-x-2 w-1/3">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 w-20">Dari Tgl:</label>
            <div className="relative flex-1">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 w-1/3">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 w-20">Ke Tgl:</label>
            <div className="relative flex-1">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 dark:bg-slate-900 p-6 transition-colors duration-300">
        {isLoading ? (
          <div className="flex justify-center items-center h-full min-h-[400px]">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
          </div>
        ) : laporanData === null ? (
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded shadow-sm min-h-[400px] p-8 flex flex-col items-center justify-center transition-colors duration-300">
            <BookOpen className="w-16 h-16 text-gray-200 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Silakan klik &quot;Tampilkan Laporan&quot; untuk memuat data jurnal buku besar.
            </p>
          </div>
        ) : laporanData.length > 0 ? (
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
            <table className="w-full text-sm">
              <thead className="bg-slate-700 dark:bg-slate-600 text-white">
                <tr>
                  <th className="py-2.5 px-4 text-left font-medium">Tanggal</th>
                  <th className="py-2.5 px-4 text-left font-medium">No. Bukti</th>
                  <th className="py-2.5 px-4 text-left font-medium">Keterangan</th>
                  <th className="py-2.5 px-4 text-right font-medium">Debit</th>
                  <th className="py-2.5 px-4 text-right font-medium">Kredit</th>
                  <th className="py-2.5 px-4 text-right font-medium">Saldo</th>
                </tr>
              </thead>
              <tbody className="dark:bg-slate-800">
                {laporanData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-slate-700 hover:bg-blue-50/50 dark:hover:bg-slate-700/50">
                    <td className="py-2.5 px-4 text-gray-600 dark:text-gray-400">{item.tanggal}</td>
                    <td className="py-2.5 px-4 text-blue-600 dark:text-blue-400 font-medium">{item.noBukti}</td>
                    <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200">{item.keterangan}</td>
                    <td className="py-2.5 px-4 text-right font-mono text-gray-800 dark:text-gray-200">{formatCurrency(item.debit)}</td>
                    <td className="py-2.5 px-4 text-right font-mono text-gray-800 dark:text-gray-200">{formatCurrency(item.kredit)}</td>
                    <td className="py-2.5 px-4 text-right font-mono font-semibold text-gray-900 dark:text-white">{formatCurrency(item.saldo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded shadow-sm min-h-[400px] p-8 flex flex-col items-center justify-center transition-colors duration-300">
            <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Tidak ada data yang ditemukan untuk filter yang dipilih.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BukuBesarTab;

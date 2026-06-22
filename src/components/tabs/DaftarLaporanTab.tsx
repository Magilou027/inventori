import { useState, ReactNode, useMemo } from 'react';
import { Files, Search } from 'lucide-react';
import type { TabType } from '../../types';

interface Report {
  id: string;
  name: string;
  desc: string;
  type: TabType;
}

interface ReportCategory {
  name: string;
  reports: Report[];
}

interface DaftarLaporanTabProps {
  handleOpenTab: (id: string, title: string, type: TabType, icon: ReactNode | null) => void;
}

const ALL_REPORTS: ReportCategory[] = [
  {
    name: 'Keuangan',
    reports: [
      { id: 'report_neraca', name: 'Neraca (Standar)', desc: 'Laporan posisi keuangan perusahaan pada satu titik waktu.', type: 'module' },
      { id: 'report_laba_rugi', name: 'Laba/Rugi (Standar)', desc: 'Laporan kinerja keuangan perusahaan selama periode waktu.', type: 'module' },
      { id: 'report_arus_kas', name: 'Arus Kas (Direct)', desc: 'Laporan arus kas masuk dan keluar dari aktivitas operasi.', type: 'module' },
    ],
  },
  {
    name: 'Buku Besar',
    reports: [
      { id: 'report_keseluruhan_jurnal', name: 'Keseluruhan Jurnal', desc: 'Tampilkan semua transaksi jurnal dalam periode tertentu.', type: 'module' },
      { id: 'buku_besar_mod', name: 'Buku Besar', desc: 'Rincian transaksi per akun perkiraan.', type: 'module' },
    ],
  },
  {
    name: 'Penjualan',
    reports: [
      { id: 'report_penjualan_pelanggan', name: 'Rincian Penjualan per Pelanggan', desc: 'Laporan detail penjualan untuk setiap pelanggan.', type: 'module' },
      { id: 'report_penjualan_barang', name: 'Penjualan per Barang', desc: 'Analisa barang mana yang paling banyak terjual.', type: 'module' },
    ],
  },
  { name: 'Piutang', reports: [{ id: 'report_umur_piutang', name: 'Umur Piutang', desc: 'Laporan piutang yang belum dibayar berdasarkan umurnya.', type: 'module' }] },
  { name: 'Pembelian', reports: [{ id: 'report_pembelian_pemasok', name: 'Rincian Pembelian per Pemasok', desc: 'Laporan detail pembelian dari setiap pemasok.', type: 'module' }] },
  { name: 'Hutang', reports: [{ id: 'report_umur_hutang', name: 'Umur Hutang', desc: 'Laporan hutang yang belum dibayar berdasarkan umurnya.', type: 'module' }] },
  { name: 'Persediaan', reports: [{ id: 'report_nilai_persediaan', name: 'Nilai Persediaan', desc: 'Laporan nilai total dari semua stok barang.', type: 'module' }] },
  { name: 'Pajak', reports: [{ id: 'report_ppn', name: 'Laporan PPN', desc: 'Ringkasan pajak masukan dan keluaran.', type: 'module' }] },
];

const DaftarLaporanTab: React.FC<DaftarLaporanTabProps> = ({ handleOpenTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_REPORTS[0].name);
  const [searchTerm, setSearchTerm] = useState('');

  const reportsToDisplay = useMemo(() => {
    if (searchTerm.trim() === '') {
      return ALL_REPORTS.find(cat => cat.name === activeCategory)?.reports || [];
    }
    return ALL_REPORTS.flatMap(category => category.reports)
      .filter(report =>
        report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, activeCategory]);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setSearchTerm(''); // Reset pencarian saat kategori diubah
  };

  const onReportClick = (report: Report) => {
    handleOpenTab(report.id, report.name, report.type, <Files className="w-4 h-4" />);
  };

  return (
    <div className="flex h-full bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="w-64 bg-gray-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 p-4 flex flex-col space-y-1 transition-colors duration-300">
        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-2">
          Kategori Laporan
        </h3>
        {ALL_REPORTS.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className={`px-3 py-2 rounded text-sm cursor-pointer transition-colors ${searchTerm.trim() !== '' ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' :
              activeCategory === cat.name ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat.name}
          </div>
        ))}
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {searchTerm.trim() !== '' ? 'Hasil Pencarian Laporan' : `Laporan ${activeCategory}`}
          </h2>
          <div className="relative w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Cari laporan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {reportsToDisplay.map((report) => (
            <div
              key={report.name}
              onClick={() => onReportClick(report)}
              className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md cursor-pointer transition-all bg-white dark:bg-slate-800 group"
            >
              <div className="flex items-start space-x-3">
                <Files className="w-6 h-6 text-blue-500 dark:text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-1">{report.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {report.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaftarLaporanTab;

import { useState, useEffect, type ReactNode, type MouseEvent } from 'react';
import {
  LayoutDashboard, Users,
} from 'lucide-react';
import type { TabItem, TabType, SidebarMenuName } from './types';
import { Sidebar, Header, TabBar, SubHeader, Footer } from './components/layout';
import {
  DashboardTab,
  CustomerNewTab,
  UangMukaTab,
  FakturPenjualanTab,
  PengaturanTab,
  OrbiboxStoreTab,
  CabangTab,
  DepartemenTab,
  KalenderTab,
  AkunPerkiraanTab,
  BukuBesarTab,
  EFakturTab,
  DaftarLaporanTab,
  AnalisaAITab,
  PermintaanBarangTab,
  BarangJasaTab,
  PemenuhanPesananTab,
  BarangGudangTab,
  StokMinimumTab,
  PesananPembelianTab,
  PenerimaanBarangTab,
  FakturPembelianTab,
  PesananPenjualanTab,
} from './components/tabs';
import './App.css';

const INITIAL_TABS: TabItem[] = [
  { id: 'dashboard', title: 'Dashboard', type: 'dashboard', icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
  { id: 'pelanggan', title: 'Pelanggan', type: 'customer', icon: <Users className="w-4 h-4 mr-2" /> },
  { id: 'uang_muka', title: 'Uang Muka Penjualan', type: 'uang_muka', icon: null },
  { id: 'faktur', title: 'Faktur Penjualan', type: 'faktur', icon: null },
];

export interface Akun {
  no: string;
  nama: string;
  tipe: string;
  saldo: number;
}

const initialAkun: Akun[] = [
  { no: '1101.01', nama: 'Kas Utama - IDR', tipe: 'Kas & Bank', saldo: 125500000 },
  { no: '1101.02', nama: 'Kas Kecil (Petty Cash)', tipe: 'Kas & Bank', saldo: 5000000 },
  { no: '1102.01', nama: 'Bank BCA - 1234567', tipe: 'Kas & Bank', saldo: 850200450 },
  { no: '1103.01', nama: 'Piutang Usaha IDR', tipe: 'Akun Piutang', saldo: 45000000 },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const [tabs, setTabs] = useState<TabItem[]>(INITIAL_TABS);
  const [activeTabId, setActiveTabId] = useState<string>('pelanggan');
  const [activeSidebarMenu, setActiveSidebarMenu] = useState<SidebarMenuName>(null);
  const [dataAkun, setDataAkun] = useState<Akun[]>(initialAkun);

  const handleOpenTab = (
    id: string,
    title: string,
    type: TabType,
    icon: ReactNode | null,
  ): void => {
    if (!tabs.find((t) => t.id === id)) {
      setTabs([...tabs, { id, title, type, icon }]);
    }
    setActiveTabId(id);
    setActiveSidebarMenu(null);
  };

  const closeTab = (e: MouseEvent<SVGElement>, id: string): void => {
    e.stopPropagation();
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);
    if (activeTabId === id && newTabs.length > 0) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  const renderActiveTab = (): ReactNode => {
    switch (activeTabId) {
      case 'dashboard':
        return <DashboardTab />;
      case 'pelanggan':
        return <CustomerNewTab />;
      case 'uang_muka':
        return <UangMukaTab />;
      case 'faktur':
        return <FakturPenjualanTab />;
      case 'pengaturan_app':
        return <PengaturanTab />;
      case 'orbibox_store':
        return <OrbiboxStoreTab />;
      case 'cabang':
        return <CabangTab />;
      case 'departemen':
        return <DepartemenTab />;
      case 'kalender':
        return <KalenderTab />;
      case 'buku_besar_mod':
        return <BukuBesarTab dataAkun={dataAkun} />;
      case 'akun_perkiraan':
        return <AkunPerkiraanTab dataAkun={dataAkun} setDataAkun={setDataAkun} />;
      case 'permintaan_barang':
        return <PermintaanBarangTab />;
      case 'barang_jasa':
        return <BarangJasaTab />;
      case 'pemenuhan_pesanan':
        return <PemenuhanPesananTab />;
      case 'barang_gudang':
        return <BarangGudangTab />;
      case 'stok_minimum':
        return <StokMinimumTab />;
      case 'pesanan_pembelian':
        return <PesananPembelianTab />;
      case 'penerimaan_barang':
        return <PenerimaanBarangTab />;
      case 'faktur_pembelian':
        return <FakturPembelianTab />;
      case 'pesanan_penjualan':
        return <PesananPenjualanTab />;
      case 'efaktur':
        return <EFakturTab />;
      case 'laporan':
        return <DaftarLaporanTab handleOpenTab={handleOpenTab} />;
      case 'analisa_ai':
        return <AnalisaAITab />;
      default:
        return (
          <div className="p-8 flex flex-col items-center justify-center h-full m-4">
            <div className="bg-white dark:bg-slate-800 p-12 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 flex flex-col items-center text-center max-w-lg w-full transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-700 dark:text-blue-400">
                <div className="scale-150">
                  {tabs.find((t) => t.id === activeTabId)?.icon || <FileText />}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {tabs.find((t) => t.id === activeTabId)?.title || 'Modul'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Halaman ini siap digunakan. Anda dapat menambahkan formulir data, tabel, atau fitur ERP lainnya di sini.
              </p>
              <button
                onClick={(e) => closeTab(e as unknown as MouseEvent<SVGElement>, activeTabId)}
                className="mt-6 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Tutup Tab Ini
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden transition-colors duration-300 bg-gray-100 dark:bg-slate-900">
      {/* Sidebar */}
      <Sidebar
        activeSidebarMenu={activeSidebarMenu}
        setActiveSidebarMenu={setActiveSidebarMenu}
        handleOpenTab={handleOpenTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden" onClick={() => setActiveSidebarMenu(null)}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} handleOpenTab={handleOpenTab} />
        <TabBar tabs={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} closeTab={closeTab} />
        <SubHeader activeTabId={activeTabId} />

        {/* Content Area */}
        <div className="flex-1 overflow-auto flex flex-col transition-colors duration-300 bg-gray-100 dark:bg-slate-800">
          {renderActiveTab()}
        </div>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
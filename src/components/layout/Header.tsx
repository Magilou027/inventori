import { useState, useEffect, useRef, type ReactNode } from 'react';
import {
  Search, Bell, HelpCircle, Sun, Moon,
  Users, FileText, ShoppingCart, BookOpen, Settings2, LayoutDashboard,
  Store, Network, CheckSquare, Calendar as CalendarIcon, FileSpreadsheet,
  ClipboardList, PackageSearch, PackageCheck, Warehouse, TrendingDown,
  Truck, Calculator, Receipt, FileBox, Files, Sparkles
} from 'lucide-react';
import type { TabType } from '../../types';

interface SearchableItem {
  id: string;
  title: string;
  type: TabType;
  category: string;
  icon: ReactNode;
}

interface NotificationType {
  id: number;
  text: string;
  time: string;
  isRead: boolean;
}

// Data ini mencerminkan semua item menu yang tersedia di Sidebar
const ALL_SEARCHABLE_ITEMS: SearchableItem[] = [
  // Pengaturan
  { id: 'pengaturan_app', title: 'Pengaturan', type: 'module', category: 'Pengaturan', icon: <Settings2 className="w-4 h-4" /> },
  { id: 'orbibox_store', title: 'Orbibox Store', type: 'module', category: 'Pengaturan', icon: <Store className="w-4 h-4" /> },
  // Perusahaan
  { id: 'cabang', title: 'Cabang', type: 'module', category: 'Perusahaan', icon: <Network className="w-4 h-4" /> },
  { id: 'departemen', title: 'Departemen', type: 'module', category: 'Perusahaan', icon: <CheckSquare className="w-4 h-4" /> },
  { id: 'kalender', title: 'Kalender', type: 'module', category: 'Perusahaan', icon: <CalendarIcon className="w-4 h-4" /> },
  // Buku Besar
  { id: 'buku_besar_mod', title: 'Buku Besar', type: 'module', category: 'Buku Besar', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'akun_perkiraan', title: 'Akun Perkiraan', type: 'module', category: 'Buku Besar', icon: <FileSpreadsheet className="w-4 h-4" /> },
  // Persediaan
  { id: 'permintaan_barang', title: 'Permintaan Barang', type: 'module', category: 'Persediaan', icon: <ClipboardList className="w-4 h-4" /> },
  { id: 'barang_jasa', title: 'Barang & Jasa', type: 'module', category: 'Persediaan', icon: <PackageSearch className="w-4 h-4" /> },
  { id: 'pemenuhan_pesanan', title: 'Pemenuhan Pesanan', type: 'module', category: 'Persediaan', icon: <PackageCheck className="w-4 h-4" /> },
  { id: 'barang_gudang', title: 'Barang per Gudang', type: 'module', category: 'Persediaan', icon: <Warehouse className="w-4 h-4" /> },
  { id: 'stok_minimum', title: 'Stok Minimum', type: 'module', category: 'Persediaan', icon: <TrendingDown className="w-4 h-4" /> },
  // Pembelian
  { id: 'pesanan_pembelian', title: 'Pesanan Pembelian', type: 'module', category: 'Pembelian', icon: <ShoppingCart className="w-4 h-4" /> },
  { id: 'penerimaan_barang', title: 'Penerimaan Barang', type: 'module', category: 'Pembelian', icon: <Truck className="w-4 h-4" /> },
  { id: 'faktur_pembelian', title: 'Faktur Pembelian', type: 'module', category: 'Pembelian', icon: <FileText className="w-4 h-4" /> },
  // Penjualan
  { id: 'pelanggan', title: 'Pelanggan', type: 'customer', category: 'Penjualan', icon: <Users className="w-4 h-4" /> },
  { id: 'pesanan_penjualan', title: 'Pesanan Penjualan', type: 'module', category: 'Penjualan', icon: <Calculator className="w-4 h-4" /> },
  { id: 'uang_muka', title: 'Uang Muka Penjualan', type: 'uang_muka', category: 'Penjualan', icon: <Receipt className="w-4 h-4" /> },
  { id: 'faktur', title: 'Faktur Penjualan', type: 'faktur', category: 'Penjualan', icon: <FileText className="w-4 h-4" /> },
  // SmartLink Tax
  { id: 'efaktur', title: 'e-Faktur Legacy', type: 'module', category: 'SmartLink Tax', icon: <FileBox className="w-4 h-4" /> },
  // Daftar Laporan
  { id: 'laporan', title: 'Daftar Laporan', type: 'module', category: 'Laporan', icon: <Files className="w-4 h-4" /> },
  { id: 'analisa_ai', title: 'Analisa AI', type: 'module', category: 'Laporan', icon: <Sparkles className="w-4 h-4" /> },
];

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  handleOpenTab: (id: string, title: string, type: TabType, icon: ReactNode | null) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode, handleOpenTab }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const notifContainerRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState<NotificationType[]>([
    { id: 1, text: 'Pesanan SO.2026.05.00009 telah disetujui.', time: '5 menit lalu', isRead: false },
    { id: 2, text: 'Stok "Mouse Logitech" telah mencapai batas minimum.', time: '1 jam lalu', isRead: false },
    { id: 3, text: 'Faktur SI.2026.05.00008 akan jatuh tempo besok.', time: '8 jam lalu', isRead: true },
    { id: 4, text: 'Laporan Laba/Rugi bulan April telah dibuat.', time: 'Kemarin', isRead: true },
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifContainerRef.current && !notifContainerRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const toggleNotifDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNotifOpen(prev => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      setSearchResults(
        ALL_SEARCHABLE_ITEMS.filter(item =>
          item.title.toLowerCase().includes(term.toLowerCase()) ||
          item.category.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (item: SearchableItem) => {
    handleOpenTab(item.id, item.title, item.type, item.icon);
    setSearchTerm('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  return (
    <header className="h-14 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 flex items-center justify-between px-4 shadow z-20 text-white">
      <div
        className="flex items-center space-x-2 sm:space-x-6 cursor-pointer"
        onClick={() => handleOpenTab('dashboard', 'Dashboard', 'dashboard', <LayoutDashboard className="w-4 h-4 mr-2" />)}
      >
        <button className="flex items-center text-lg sm:text-xl font-bold tracking-tight">
          Orbibox
          <span className="font-light ml-1.5 text-sm bg-white text-gray-800 px-1.5 py-0.5 rounded opacity-80 mt-0.5">
            online
          </span>
        </button>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative hidden sm:block" ref={searchContainerRef}>
          <input
            type="text"
            placeholder="Pencarian Global"
            className="bg-black/20 border-none rounded-full px-4 py-1 text-sm text-white placeholder-white/70 w-32 md:w-64 focus:outline-none focus:ring-1 focus:ring-white transition-all"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
          />
          <Search className="w-4 h-4 absolute right-3 top-1.5 opacity-70" />
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-700 rounded-md shadow-lg border border-gray-200 dark:border-slate-600 overflow-hidden text-black dark:text-white">
              <ul>
                {searchResults.map(item => (
                  <li key={item.id} onClick={() => handleResultClick(item)} className="px-4 py-2.5 text-sm hover:bg-blue-50 dark:hover:bg-slate-600 cursor-pointer flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400">{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    <span className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">{item.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="cursor-pointer opacity-80 hover:opacity-100 transition-all flex items-center justify-center p-1 rounded-full hover:bg-white/10"
          title={isDarkMode ? 'Matikan Mode Gelap' : 'Aktifkan Mode Gelap'}
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <HelpCircle className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />

        {/* Notifikasi Bell */}
        <div className="relative" ref={notifContainerRef}>
          <button onClick={toggleNotifDropdown} className="relative cursor-pointer p-1 rounded-full hover:bg-white/10">
            <Bell className="w-5 h-5 opacity-80 hover:opacity-100" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
          {isNotifOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-gray-200 dark:border-slate-600 text-black dark:text-white">
              <div className="flex justify-between items-center p-3 border-b border-gray-100 dark:border-slate-700">
                <h4 className="font-semibold text-sm">Notifikasi</h4>
                {unreadCount > 0 && <button onClick={handleMarkAllAsRead} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">Tandai semua dibaca</button>}
              </div>
              <ul className="max-h-96 overflow-y-auto">
                {notifications.map(notif => (
                  <li key={notif.id} onClick={() => handleMarkAsRead(notif.id)} className={`p-3 border-b border-gray-100 dark:border-slate-700 last:border-b-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 ${!notif.isRead ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}>
                    <p className={`text-sm ${!notif.isRead ? 'font-semibold text-gray-800 dark:text-gray-100' : 'text-gray-600 dark:text-gray-300'}`}>{notif.text}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notif.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 ml-1 sm:ml-4 cursor-pointer hover:bg-white/10 px-1 sm:px-2 py-1 rounded">
          <div className="hidden sm:flex text-right flex-col">
            <span className="text-sm font-medium">PT. Pemindo Sukses Sejahtera</span>
            <span className="text-[10px] text-gray-300">pemmztechie@pemmz.com</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-blue-800 flex items-center justify-center font-bold">
            P
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

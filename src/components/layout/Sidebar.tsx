import {
  Settings, Building2, Book, ShoppingCart, Calculator,
  History, X, Package, Receipt,
  Settings2, Store, Network, CheckSquare,
  Calendar as CalendarIcon, FileText,
  BookOpen, FileSpreadsheet, ClipboardList, PackageSearch,
  PackageCheck, Warehouse, TrendingDown, Truck, FileBox,
  Files, Sparkles, Users,
} from 'lucide-react';
import type { SidebarProps, SidebarMenuName } from '../../types';

const Sidebar: React.FC<SidebarProps> = ({
  activeSidebarMenu,
  setActiveSidebarMenu,
  handleOpenTab,
}) => {
  const toggleMenu = (menu: SidebarMenuName): void => {
    setActiveSidebarMenu(activeSidebarMenu === menu ? null : menu);
  };

  const menuButtonClass = (menu: SidebarMenuName): string =>
    `p-2 rounded transition-colors ${
      activeSidebarMenu === menu
        ? 'text-white bg-blue-700'
        : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`;

  const popupPanelClass = (width: string, position: string = 'top-0') =>
    `absolute left-14 ${position} ml-2 ${width} bg-white dark:bg-slate-800 rounded shadow-2xl border border-gray-200 dark:border-slate-600 z-50 overflow-hidden transition-colors duration-300`;

  const popupHeaderClass =
    'bg-gray-100 dark:bg-slate-700 px-4 py-2 border-b border-gray-200 dark:border-slate-600 text-sm font-semibold text-gray-700 dark:text-gray-200 flex justify-between items-center transition-colors duration-300';

  const popupGridClass =
    'grid gap-px bg-gray-200 dark:bg-slate-600 p-2 transition-colors duration-300';

  const popupItemClass =
    'bg-white dark:bg-slate-800 p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 transition-colors';

  const popupItemTextClass = 'text-[10px] font-medium text-center dark:text-gray-300';
  const popupItemTextSmClass = 'text-xs text-center dark:text-gray-300';

  return (
    <div className="w-14 bg-slate-900 flex flex-col items-center py-4 space-y-6 z-30 shadow-xl relative border-r border-slate-800">
      <div className="bg-red-500 rounded p-1.5 cursor-pointer hover:bg-red-600 mb-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
        </svg>
      </div>
      <div className="w-full flex flex-col space-y-3 items-center relative">

        {/* Pengaturan */}
        <div className="relative group">
          <button onClick={() => toggleMenu('pengaturan')} className={menuButtonClass('pengaturan')}>
            <Settings className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'pengaturan' && (
            <div className={popupPanelClass('w-56')}>
              <div className={popupHeaderClass}>
                <span>Pengaturan</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-2`}>
                <div onClick={() => handleOpenTab('pengaturan_app', 'Pengaturan', 'module', <Settings2 className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <Settings2 className="w-8 h-8 mb-2 text-gray-600 dark:text-gray-400" /><span className={popupItemTextSmClass}>Pengaturan</span>
                </div>
                <div onClick={() => handleOpenTab('orbibox_store', 'Orbibox Store', 'module', <Store className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-r`}>
                  <Store className="w-8 h-8 mb-2 text-gray-600 dark:text-gray-400" /><span className={popupItemTextSmClass}>Orbibox Store</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Perusahaan */}
        <div className="relative group">
          <button onClick={() => toggleMenu('perusahaan')} className={menuButtonClass('perusahaan')}>
            <Building2 className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'perusahaan' && (
            <div className={popupPanelClass('w-72')}>
              <div className={popupHeaderClass}>
                <span>Perusahaan</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-3`}>
                <div onClick={() => handleOpenTab('cabang', 'Cabang', 'module', <Network className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <Network className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" /><span className={popupItemTextClass}>Cabang</span>
                </div>
                <div onClick={() => handleOpenTab('departemen', 'Departemen', 'module', <CheckSquare className="w-4 h-4 mr-2" />)} className={popupItemClass}>
                  <CheckSquare className="w-8 h-8 mb-2 text-indigo-600 dark:text-indigo-400" /><span className={popupItemTextClass}>Departemen</span>
                </div>
                <div onClick={() => handleOpenTab('kalender', 'Kalender', 'module', <CalendarIcon className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-r`}>
                  <CalendarIcon className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" /><span className={popupItemTextClass}>Kalender</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Buku Besar */}
        <div className="relative group">
          <button onClick={() => toggleMenu('buku_besar')} className={menuButtonClass('buku_besar')}>
            <Book className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'buku_besar' && (
            <div className={popupPanelClass('w-56')}>
              <div className={popupHeaderClass}>
                <span>Buku Besar</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-2`}>
                <div onClick={() => handleOpenTab('buku_besar_mod', 'Buku Besar', 'module', <BookOpen className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <BookOpen className="w-8 h-8 mb-2 text-teal-600 dark:text-teal-400" /><span className={popupItemTextClass}>Buku Besar</span>
                </div>
                <div onClick={() => handleOpenTab('akun_perkiraan', 'Akun Perkiraan', 'module', <FileSpreadsheet className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-r`}>
                  <FileSpreadsheet className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" /><span className={popupItemTextClass}>Akun Perkiraan</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Persediaan */}
        <div className="relative group">
          <button onClick={() => toggleMenu('persediaan')} className={menuButtonClass('persediaan')}>
            <Package className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'persediaan' && (
            <div className={popupPanelClass('w-72')}>
              <div className={popupHeaderClass}>
                <span>Persediaan</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-3`}>
                <div onClick={() => handleOpenTab('permintaan_barang', 'Permintaan Barang', 'module', <ClipboardList className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-tl`}>
                  <ClipboardList className="w-8 h-8 mb-2 text-green-600 dark:text-green-400" /><span className={popupItemTextClass}>Permintaan Barang</span>
                </div>
                <div onClick={() => handleOpenTab('barang_jasa', 'Barang & Jasa', 'module', <PackageSearch className="w-4 h-4 mr-2" />)} className={popupItemClass}>
                  <PackageSearch className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" /><span className={popupItemTextClass}>Barang & Jasa</span>
                </div>
                <div onClick={() => handleOpenTab('pemenuhan_pesanan', 'Pemenuhan Pesanan', 'module', <PackageCheck className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-tr`}>
                  <PackageCheck className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" /><span className={popupItemTextClass}>Pemenuhan Pesanan</span>
                </div>
                <div onClick={() => handleOpenTab('barang_gudang', 'Barang per Gudang', 'module', <Warehouse className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-bl`}>
                  <Warehouse className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" /><span className={popupItemTextClass}>Barang per Gudang</span>
                </div>
                <div onClick={() => handleOpenTab('stok_minimum', 'Stok Minimum', 'module', <TrendingDown className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-br`}>
                  <TrendingDown className="w-8 h-8 mb-2 text-red-500" /><span className={popupItemTextClass}>Barang Stok Minimum</span>
                </div>
                <div className="bg-gray-200 dark:bg-slate-600"></div>
              </div>
            </div>
          )}
        </div>

        {/* Pembelian */}
        <div className="relative group">
          <button onClick={() => toggleMenu('pembelian')} className={menuButtonClass('pembelian')}>
            <ShoppingCart className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'pembelian' && (
            <div className={popupPanelClass('w-72')}>
              <div className={popupHeaderClass}>
                <span>Pembelian</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-3`}>
                <div onClick={() => handleOpenTab('pesanan_pembelian', 'Pesanan Pembelian', 'module', <ShoppingCart className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <ShoppingCart className="w-8 h-8 mb-2 text-orange-500" /><span className={popupItemTextClass}>Pesanan Pembelian</span>
                </div>
                <div onClick={() => handleOpenTab('penerimaan_barang', 'Penerimaan Barang', 'module', <Truck className="w-4 h-4 mr-2" />)} className={popupItemClass}>
                  <Truck className="w-8 h-8 mb-2 text-green-600 dark:text-green-400" /><span className={popupItemTextClass}>Penerimaan Barang</span>
                </div>
                <div onClick={() => handleOpenTab('faktur_pembelian', 'Faktur Pembelian', 'module', <FileText className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-r`}>
                  <FileText className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" /><span className={popupItemTextClass}>Faktur Pembelian</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Penjualan */}
        <div className="relative group">
          <button onClick={() => toggleMenu('penjualan')} className={menuButtonClass('penjualan')}>
            <Calculator className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'penjualan' && (
            <div className={popupPanelClass('w-72')}>
              <div className={popupHeaderClass}>
                <span>Penjualan</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-4`}>
                <div onClick={() => handleOpenTab('pelanggan', 'Pelanggan', 'customer', <Users className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <Users className="w-8 h-8 mb-2 text-green-600 dark:text-green-400" /><span className={popupItemTextClass}>Pelanggan</span>
                </div>
                <div onClick={() => handleOpenTab('pesanan_penjualan', 'Pesanan Penjualan', 'module', <Calculator className="w-4 h-4 mr-2" />)} className={popupItemClass}>
                  <Calculator className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" /><span className={popupItemTextClass}>Pesanan Penjualan</span>
                </div>
                <div onClick={() => handleOpenTab('uang_muka', 'Uang Muka Penjualan', 'uang_muka', null)} className={popupItemClass}>
                  <Receipt className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" /><span className={popupItemTextClass}>Uang Muka</span>
                </div>
                <div onClick={() => handleOpenTab('faktur', 'Faktur Penjualan', 'faktur', null)} className={`${popupItemClass} rounded-r`}>
                  <FileText className="w-8 h-8 mb-2 text-orange-500" /><span className={popupItemTextClass}>Faktur Penjualan</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SmartLink Tax */}
        <div className="relative group">
          <button onClick={() => toggleMenu('smartlink_tax')} className={menuButtonClass('smartlink_tax')}>
            <Receipt className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'smartlink_tax' && (
            <div className={popupPanelClass('w-32')}>
              <div className={popupHeaderClass}>
                <span>SmartLink Tax</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-1`}>
                <div onClick={() => handleOpenTab('efaktur', 'e-Faktur Legacy', 'module', <FileBox className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded`}>
                  <FileBox className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" />
                  <span className={popupItemTextClass}>e-Faktur Legacy</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Daftar Laporan */}
        <div className="relative group">
          <button onClick={() => toggleMenu('daftar_laporan')} className={menuButtonClass('daftar_laporan')}>
            <History className="w-6 h-6" />
          </button>
          {activeSidebarMenu === 'daftar_laporan' && (
            <div className={popupPanelClass('w-56', 'bottom-0')}>
              <div className={popupHeaderClass}>
                <span>Daftar Laporan</span>
                <X className="w-4 h-4 cursor-pointer hover:text-red-500" onClick={() => setActiveSidebarMenu(null)} />
              </div>
              <div className={`${popupGridClass} grid-cols-2`}>
                <div onClick={() => handleOpenTab('laporan', 'Daftar Laporan', 'module', <Files className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-l`}>
                  <Files className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" />
                  <span className={popupItemTextClass}>Daftar Laporan</span>
                </div>
                <div onClick={() => handleOpenTab('analisa_ai', 'Analisa AI', 'module', <Sparkles className="w-4 h-4 mr-2" />)} className={`${popupItemClass} rounded-r`}>
                  <Sparkles className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" />
                  <span className={popupItemTextClass}>Analisa AI</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;

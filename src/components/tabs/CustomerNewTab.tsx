import { useState } from 'react';
import {
  Search, Plus, X, ChevronDown, Save, Paperclip,
} from 'lucide-react';
import InputRow from '../ui/InputRow';

const CustomerNewTab: React.FC = () => {
  const [subTab, setSubTab] = useState<string>('Umum');
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const subTabs: string[] = ['Umum', 'Kontak', 'Pengiriman', 'Penjualan', 'Pajak', 'Saldo Piutang', 'Lain-lain'];

  const handleSave = () => {
    if (hasChanges) {
      alert('Data pelanggan berhasil disimpan!');
      setHasChanges(false);
    }
  };

  // Shared dark-mode class strings
  const inputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300';
  const selectClass = 'w-2/3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300';
  const labelClass = 'w-1/3 text-sm text-gray-600 dark:text-gray-300';
  const labelClassMt = 'w-1/3 text-sm text-gray-600 dark:text-gray-300 mt-2';
  const textareaClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none h-20 transition-colors duration-300';
  const disabledInputClass = 'border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-600 dark:text-gray-400 rounded px-2 py-1.5 text-sm transition-colors duration-300';
  const sectionTitleClass = 'text-blue-700 dark:text-blue-400 font-medium mb-4';
  const sectionTitleLgClass = 'text-blue-700 dark:text-blue-400 font-medium mb-4 text-lg';
  const checkboxLabelClass = 'text-sm text-gray-700 dark:text-gray-300';

  const renderTabContent = (): React.ReactNode => {
    switch (subTab) {
      case 'Umum':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className={sectionTitleClass}>Info Umum</h4>
              <InputRow label="Nama" required />
              <div className="flex items-center mb-3">
                <label className={labelClass}>ID Pelanggan <span className="text-red-500">*</span></label>
                <select className={selectClass}>
                  <option value="Auto">Pelanggan (Otomatis)</option>
                  <option value="Manual">Input Manual</option>
                </select>
              </div>
              <InputRow label="Kategori" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Kategori...')} />} />
              <InputRow label="No. Telp. Bisnis" />
              <InputRow label="Handphone" />
              <InputRow label="No. WhatsApp" />
              <InputRow label="Email" placeholder="Email" />
              <InputRow label="Faximili" />
              <InputRow label="Website" />
            </div>
            <div>
              <h4 className={sectionTitleClass}>Info Lainnya</h4>
              <div className="flex items-start mb-3">
                <label className={labelClassMt}>Alamat Penagihan</label>
                <div className="w-2/3 space-y-2">
                  <textarea className={textareaClass} placeholder="Jalan"></textarea>
                  <div className="flex space-x-2">
                    <input type="text" className={`w-2/3 ${inputClass}`} placeholder="Kota" />
                    <input type="text" className={`w-1/3 ${inputClass}`} placeholder="K.Pos" />
                  </div>
                  <input type="text" className={inputClass} placeholder="Provinsi" />
                  <input type="text" className={inputClass} placeholder="Negara" />
                </div>
              </div>
              <div className="flex items-center mb-3">
                <label className={labelClass}>Dipakai di Cabang</label>
                <select className={selectClass} defaultValue="Cabang Pemmz Jakbar">
                  <option value="Semua Cabang">Semua Cabang</option>
                  <option value="Kantor Pusat">Kantor Pusat</option>
                  <option value="Cabang Pemmz Jakbar">Cabang Pemmz Jakbar</option>
                </select>
              </div>
              <div className="flex items-center mb-3">
                <label className={labelClass}>Mata Uang Utama <span className="text-red-500">*</span></label>
                <select className={selectClass} defaultValue="IDR">
                  <option value="IDR">Indonesian Rupiah (IDR)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="SGD">Singapore Dollar (SGD)</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'Kontak':
        return (
          <div className="mt-4">
            <div className="flex items-center space-x-4 mb-4">
              <h4 className="text-gray-800 dark:text-gray-100 text-lg font-semibold">Kontak</h4>
              <button className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-blue-700 dark:text-blue-400 p-1 rounded shadow-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <table className="w-full border border-gray-200 dark:border-slate-700">
              <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
                <tr>
                  <th className="py-2 px-4 text-left font-medium">Nama Lengkap</th>
                  <th className="py-2 px-4 text-left font-medium border-l border-white/20">Posisi Jabatan</th>
                  <th className="py-2 px-4 text-left font-medium border-l border-white/20">Email</th>
                  <th className="py-2 px-4 text-left font-medium border-l border-white/20">Handphone</th>
                </tr>
              </thead>
              <tbody className="dark:bg-slate-800">
                <tr>
                  <td colSpan={4} className="text-center py-10 text-sm text-gray-500 dark:text-gray-400">Belum ada data</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'Pengiriman':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className={sectionTitleLgClass}>Alamat Utama</h4>
              <div className="flex items-center space-x-2 mb-4">
                <input type="checkbox" id="sameAddress" defaultChecked className="rounded text-blue-700 focus:ring-blue-600 w-4 h-4" />
                <label htmlFor="sameAddress" className={checkboxLabelClass}>Sama dengan alamat penagihan</label>
              </div>
              <div className="space-y-2">
                <textarea disabled className={`w-full ${disabledInputClass} h-20`} placeholder="Jalan"></textarea>
                <div className="flex space-x-2">
                  <input disabled type="text" className={`w-2/3 ${disabledInputClass}`} placeholder="Kota" />
                  <input disabled type="text" className={`w-1/3 ${disabledInputClass}`} placeholder="K.Pos" />
                </div>
                <input disabled type="text" className={`w-full ${disabledInputClass}`} placeholder="Provinsi" />
                <input disabled type="text" className={`w-full ${disabledInputClass}`} placeholder="Negara" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <h4 className={sectionTitleLgClass}>Alamat lainnya</h4>
                <div className="flex rounded border border-gray-300 dark:border-slate-600 overflow-hidden shadow-sm">
                  <button className="px-2 py-1 text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-700 border-r border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="px-2 py-1 text-blue-700 dark:text-blue-400 bg-white dark:bg-slate-700 flex items-center space-x-1 text-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
                    <span>Ambil</span> <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <table className="w-full border border-gray-200 dark:border-slate-700 mt-2">
                <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
                  <tr>
                    <th className="py-2 px-4 text-center font-medium">Alamat</th>
                  </tr>
                </thead>
                <tbody className="dark:bg-slate-800">
                  <tr>
                    <td className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">Belum ada data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Penjualan':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className={sectionTitleLgClass}>Penjualan</h4>
              <InputRow label="Kategori Harga" required placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Kategori Harga...')} />} />
              <InputRow label="Kategori Diskon" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Kategori Diskon...')} />} />
              <InputRow label="Syarat Pembayaran" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Syarat Pembayaran...')} />} />
              <InputRow label="Default Penjual" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Default Penjual...')} />} />
              <InputRow label="Default Diskon (%)" placeholder="%" />
              <InputRow label="Default Deskripsi" />
              <div className="flex items-start mb-3">
                <label className={labelClass}>Konsinyasi</label>
                <div className="w-2/3 flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-700 focus:ring-blue-600 w-4 h-4" />
                  <span className={checkboxLabelClass}>Ya, Perusahaan menitipkan barang ke Pelanggan ini</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className={sectionTitleLgClass}>Kustomisasi Akun Penjualan</h4>
              <InputRow label="Piutang" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Piutang...')} />} />
              <InputRow label="Uang Muka" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Uang Muka...')} />} />
              <InputRow label="Penjualan" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Penjualan...')} />} />
              <InputRow label="Diskon Barang" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Diskon Barang...')} />} />
              <InputRow label="Beban Pokok Penjualan" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Beban Pokok Penjualan...')} />} />
              <InputRow label="Retur Penjualan" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Retur Penjualan...')} />} />
              <InputRow label="Diskon Penjualan" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Akun Diskon Penjualan...')} />} />
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded text-xs text-red-600 dark:text-red-400 italic transition-colors duration-300">
                [Opsional] Diisikan jika Anda ingin membedakan jurnal akun piutang, uang muka, penjualan, retur penjualan, diskon barang penjualan, beban pokok penjualan dan akun diskon penjualan atas pelanggan ini dari default akunnya.
              </div>
            </div>
          </div>
        );
      case 'Pajak':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className={sectionTitleLgClass}>Pajak</h4>
              <div className="flex items-center mb-4">
                <label className={labelClass}>Pajak</label>
                <div className="w-2/3 flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-700 focus:ring-blue-600 w-4 h-4" />
                  <span className={checkboxLabelClass}>Default Total Faktur sudah termasuk Pajak</span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <label className={labelClass}>Tipe ID Pajak</label>
                <select className={selectClass} defaultValue="NIK">
                  <option value="NIK">NIK</option>
                  <option value="NPWP">NPWP</option>
                  <option value="KTP">KTP/Paspor</option>
                </select>
              </div>
              <InputRow label="Nomor Wajib Pajak" />
              <InputRow label="Nama Wajib Pajak" />
              <InputRow label="ID TKU" />
              <div className="flex items-center mb-3">
                <label className={labelClass}>Kode Negara</label>
                <select className={selectClass} defaultValue="ID">
                  <option value="ID">Indonesia</option>
                  <option value="SG">Singapura</option>
                  <option value="MY">Malaysia</option>
                </select>
              </div>
              <div className="flex items-center mb-3">
                <label className={labelClass}>Tipe Transaksi</label>
                <select className={selectClass} defaultValue="Digunggung">
                  <option value="Digunggung">Digunggung</option>
                  <option value="Tidak Digunggung">Tidak Digunggung</option>
                  <option value="Ekspor">Ekspor</option>
                </select>
              </div>
            </div>
            <div>
              <h4 className={sectionTitleLgClass}>Alamat</h4>
              <div className="flex items-start mb-3">
                <label className={labelClass}>Alamat Pajak</label>
                <div className="w-2/3 space-y-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" defaultChecked className="rounded text-blue-700 focus:ring-blue-600 w-4 h-4" />
                    <span className={checkboxLabelClass}>Sama dengan alamat penagihan</span>
                  </div>
                  <textarea disabled className={`w-full ${disabledInputClass} h-20`} placeholder="Jalan"></textarea>
                  <div className="flex space-x-2">
                    <input disabled type="text" className={`w-2/3 ${disabledInputClass}`} placeholder="Kota" />
                    <input disabled type="text" className={`w-1/3 ${disabledInputClass}`} placeholder="K.Pos" />
                  </div>
                  <input disabled type="text" className={`w-full ${disabledInputClass}`} placeholder="Provinsi" />
                  <input disabled type="text" className={`w-full ${disabledInputClass}`} placeholder="Negara" />
                </div>
              </div>
            </div>
          </div>
        );
      case 'Saldo Piutang':
        return (
          <div className="mt-4">
            <div className="flex items-center space-x-4 mb-4">
              <h4 className="text-gray-800 dark:text-gray-100 text-lg font-semibold">Piutang Awal</h4>
              <button className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-blue-700 dark:text-blue-400 p-1.5 rounded shadow-sm hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <table className="w-full border border-gray-300 dark:border-slate-700 rounded overflow-hidden">
              <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
                <tr>
                  <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Tanggal</th>
                  <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Jumlah</th>
                  <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Mata Uang</th>
                  <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Syarat Pembayaran</th>
                  <th className="py-2.5 px-4 text-left font-medium border-r border-white/20">Nomor #</th>
                  <th className="py-2.5 px-4 text-left font-medium">Keterangan</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                <tr>
                  <td colSpan={6} className="text-center py-12 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800">Belum ada data</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'Lain-lain':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className={sectionTitleLgClass}>Pembatasan Piutang Pelanggan</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" name="pembatasan" defaultChecked className="w-4 h-4 text-blue-700 focus:ring-blue-600" />
                  <label className="text-sm text-gray-700 dark:text-gray-300 font-medium">Per Pelanggan</label>
                </div>
                <div className="ml-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 rounded text-blue-700" />
                    <span className={checkboxLabelClass}>Jika ada faktur dengan umur lebih dari</span>
                    <input type="text" className="w-16 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm text-right focus:border-blue-500 transition-colors duration-300" />
                    <span className={checkboxLabelClass}>Hari</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4 rounded text-blue-700" />
                    <span className={checkboxLabelClass}>Jika total piutang & pesanan melebihi</span>
                    <div className="flex relative">
                      <span className="absolute left-2 top-1 text-gray-500 dark:text-gray-400 text-sm font-semibold">Rp</span>
                      <input type="text" className="w-32 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded pl-8 pr-2 py-1 text-sm text-right focus:border-blue-500 transition-colors duration-300" defaultValue="0" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <input type="radio" name="pembatasan" className="w-4 h-4 text-blue-700 focus:ring-blue-600" />
                  <label className="text-sm text-gray-700 dark:text-gray-300 font-medium">Tergabung ke Pelanggan Induk</label>
                </div>
              </div>
              <h4 className={`${sectionTitleLgClass} mt-8`}>Lain-lain</h4>
            <InputRow label="Gudang Default" placeholder="Cari/Pilih..." rightIcon={<Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" onClick={() => alert('Mencari Gudang Default...')} />} />
              <div className="flex items-start mb-3">
                <label className={labelClassMt}>Catatan</label>
                <textarea className={`w-2/3 ${textareaClass} h-24`}></textarea>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="p-8 text-center text-gray-500 dark:text-gray-400">Konten untuk {subTab} sedang dikembangkan.</div>;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 flex-1 flex flex-col relative h-full transition-colors duration-300">
      <div className="absolute right-4 top-2 flex flex-col space-y-2 z-10">
        <button
          onClick={handleSave}
          className={`${hasChanges ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-slate-600'} p-2 rounded border shadow-sm flex items-center justify-center transition-colors`}
          title="Simpan Perubahan"
        >
          <Save className="w-5 h-5" />
        </button>
        <button className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900 shadow-sm flex items-center justify-center relative transition-colors duration-300">
          <Paperclip className="w-5 h-5" />
          <ChevronDown className="w-3 h-3 absolute bottom-1 right-0" />
        </button>
      </div>

      <div className="flex border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 px-2 pt-2 overflow-x-auto transition-colors duration-300">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSubTab(tab)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              subTab === tab
                ? 'border-blue-700 dark:border-blue-400 text-blue-800 dark:text-blue-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6 overflow-y-auto flex-1" onChange={() => setHasChanges(true)}>
        <div className="max-w-5xl">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CustomerNewTab;

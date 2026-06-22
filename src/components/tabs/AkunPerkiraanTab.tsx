import { useState, useRef } from 'react';
import { Plus, Search, Save, X, Edit, Trash2 } from 'lucide-react';
import type { Akun } from '../../App';

interface AkunPerkiraanTabProps {
  dataAkun: Akun[];
  setDataAkun: React.Dispatch<React.SetStateAction<Akun[]>>;
}

const TIPE_AKUN = ['Kas & Bank', 'Akun Piutang', 'Persediaan', 'Aktiva Lancar Lainnya', 'Aktiva Tetap', 'Akun Hutang', 'Hutang Jangka Panjang', 'Ekuitas', 'Pendapatan', 'Beban Pokok Penjualan', 'Beban'];

const AkunPerkiraanTab: React.FC<AkunPerkiraanTabProps> = ({ dataAkun, setDataAkun }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Akun>({ no: '', nama: '', tipe: 'Kas & Bank', saldo: 0 });
  const [editingNo, setEditingNo] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (!formData.no || !formData.nama) {
      alert('No. Akun dan Nama Akun wajib diisi!');
      return;
    }
    if (editingNo) {
      setDataAkun(dataAkun.map((item) => (item.no === editingNo ? formData : item)));
      setEditingNo(null);
      alert('Data akun berhasil diperbarui!');
    } else {
      setDataAkun([...dataAkun, formData]);
      setShowForm(false);
      alert('Data akun baru berhasil disimpan!');
    }
    setFormData({ no: '', nama: '', tipe: 'Kas & Bank', saldo: 0 });
  };

  const handleEdit = (item: Akun) => {
    setFormData(item);
    setEditingNo(item.no);
    setShowForm(false);
  };

  const handleDelete = (no: string) => {
    if (window.confirm('Yakin ingin menghapus akun ini?')) {
      setDataAkun(dataAkun.filter((item) => item.no !== no));
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const csvData = event.target?.result as string;
      const lines = csvData.split(/\r?\n/).filter((line) => line.trim() !== '');
      const importedData: Akun[] = [];

      // Asumsi format CSV: No. Akun, Nama Akun, Tipe Akun, Saldo
      // Loop dimulai dari index 1 untuk melewati baris header (jika ada)
      for (let i = 1; i < lines.length; i++) {
        const columns = lines[i].split(',');
        if (columns.length >= 2) {
          importedData.push({
            no: columns[0].trim(),
            nama: columns[1].trim(),
            tipe: columns[2] ? columns[2].trim() : 'Kas & Bank',
            saldo: columns[3] ? Number(columns[3].trim()) || 0 : 0,
          });
        }
      }

      if (importedData.length > 0) {
        setDataAkun((prev) => [...prev, ...importedData]);
        alert(`${importedData.length} data akun berhasil diimpor!`);
      } else {
        alert('Tidak ada data valid yang ditemukan pada file CSV.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input agar file yang sama bisa dipilih lagi jika perlu
  };

  const filteredData = dataAkun.filter(
    (item) =>
      item.no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formInputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm focus:border-blue-500 outline-none transition-colors duration-300';

  const renderFormRow = (isEditing: boolean) => (
    <tr className={`border-b border-gray-200 dark:border-slate-700 ${isEditing ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : 'bg-blue-50/50 dark:bg-blue-900/20'}`}>
      <td className="py-2 px-4">
        <input type="text" className={formInputClass} placeholder="No. Akun..." value={formData.no} onChange={(e) => setFormData({ ...formData, no: e.target.value })} disabled={isEditing} />
      </td>
      <td className="py-2 px-4">
        <input type="text" className={formInputClass} placeholder="Nama Akun..." value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} />
      </td>
      <td className="py-2 px-4">
        <select className={formInputClass} value={formData.tipe} onChange={(e) => setFormData({ ...formData, tipe: e.target.value })}>
          {TIPE_AKUN.map((tipe) => <option key={tipe} value={tipe}>{tipe}</option>)}
        </select>
      </td>
      <td className="py-2 px-4">
        <input type="number" className={`${formInputClass} text-right`} placeholder="0" value={formData.saldo} onChange={(e) => setFormData({ ...formData, saldo: Number(e.target.value) || 0 })} />
      </td>
      <td className="py-2 px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <button onClick={handleSave} className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700" title="Simpan">
            <Save className="w-4 h-4" />
          </button>
          <button onClick={() => { setShowForm(false); setEditingNo(null); setFormData({ no: '', nama: '', tipe: 'Kas & Bank', saldo: 0 }); }} className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600" title="Batal">
            <X className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 transition-colors duration-300">
    <div className="bg-white dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center shadow-sm transition-colors duration-300">
      <div className="relative w-80">
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          className="w-full pl-9 pr-4 py-1.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
          placeholder="Cari No. Akun atau Nama..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleImport}
          className="hidden"
        />
        <button onClick={() => fileInputRef.current?.click()} className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded shadow-sm text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-300">
          Impor Data
        </button>
        <button
          onClick={() => { setShowForm(true); setEditingNo(null); setFormData({ no: '', nama: '', tipe: 'Kas & Bank', saldo: 0 }); }}
          className="bg-green-600 text-white px-4 py-2 rounded shadow-sm text-sm font-medium flex items-center space-x-2 hover:bg-green-700"
        >
          <Plus className="w-4 h-4" /> <span>Data Baru</span>
        </button>
      </div>
    </div>
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
        <table className="w-full">
          <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
            <tr>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20 w-32">No. Akun</th>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20">Nama Akun</th>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20 w-48">Tipe Akun</th>
              <th className="py-3 px-4 text-right font-medium border-r border-white/20 w-48">Saldo Akhir (IDR)</th>
              <th className="py-3 px-4 text-center font-medium w-28">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {showForm && renderFormRow(false)}
            {filteredData.map((item, index) => (
              editingNo === item.no ? (
                renderFormRow(true)
              ) : (
                <tr key={item.no} className={`border-b border-gray-100 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer transition-colors ${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50/50 dark:bg-slate-800/50'}`}>
                  <td className="py-3 px-4 text-sm text-blue-700 dark:text-blue-400 font-medium">{item.no}</td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200 font-medium">{item.nama}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{item.tipe}</td>
                  <td className="py-3 px-4 text-sm font-semibold text-right text-gray-800 dark:text-gray-200">{item.saldo.toLocaleString('id-ID')}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button onClick={() => handleEdit(item)} className="p-1.5 bg-yellow-500 text-white rounded hover:bg-yellow-600" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(item.no)} className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600" title="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};


export default AkunPerkiraanTab;

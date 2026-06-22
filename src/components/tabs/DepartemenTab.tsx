import { useState } from 'react';
import { Plus, Search, Save, X, Edit, Trash2 } from 'lucide-react';

interface Departemen {
  kode: string;
  nama: string;
  sub: string;
  status: string;
}

const initialDepartemen: Departemen[] = [
  { kode: 'MKT', nama: 'Marketing & Sales', sub: '-', status: 'Aktif' },
  { kode: 'IT', nama: 'IT & Infrastructure', sub: '-', status: 'Aktif' },
];

const DepartemenTab: React.FC = () => {
  const [dataDepartemen, setDataDepartemen] = useState<Departemen[]>(initialDepartemen);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Departemen>({ kode: '', nama: '', sub: '', status: 'Aktif' });
  const [editingKode, setEditingKode] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSave = () => {
    if (!formData.kode || !formData.nama) {
      alert('Kode dan Nama Departemen wajib diisi!');
      return;
    }
    if (editingKode) {
      setDataDepartemen(dataDepartemen.map((item) => item.kode === editingKode ? formData : item));
      setEditingKode(null);
      alert('Data departemen berhasil diperbarui!');
    } else {
      setDataDepartemen([...dataDepartemen, formData]);
      setShowForm(false);
      alert('Data departemen baru berhasil disimpan!');
    }
    setFormData({ kode: '', nama: '', sub: '', status: 'Aktif' });
  };

  const handleEdit = (item: Departemen) => {
    setFormData(item);
    setEditingKode(item.kode);
    setShowForm(false);
  };

  const handleDelete = (kode: string) => {
    if (window.confirm('Yakin ingin menghapus data ini?')) {
      setDataDepartemen(dataDepartemen.filter((item) => item.kode !== kode));
    }
  };

  const filteredData = dataDepartemen.filter(
    (item) =>
      item.kode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formInputClass = 'w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm focus:border-blue-500 outline-none transition-colors duration-300';

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 relative transition-colors duration-300">
    <div className="bg-white dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center shadow-sm transition-colors duration-300">
      <div className="relative w-72">
        <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          className="w-full pl-9 pr-4 py-1.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded text-sm focus:border-blue-500 focus:outline-none transition-colors duration-300"
          placeholder="Cari Departemen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button 
        onClick={() => { setShowForm(true); setEditingKode(null); setFormData({ kode: '', nama: '', sub: '', status: 'Aktif' }); }}
        className="bg-green-600 text-white px-4 py-2 rounded shadow-sm text-sm font-medium flex items-center space-x-2 hover:bg-green-700 transition-colors"
      >
        <Plus className="w-4 h-4" /> <span>Data Baru</span>
      </button>
    </div>
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
        <table className="w-full">
          <thead className="bg-slate-700 dark:bg-slate-600 text-white text-sm">
            <tr>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20 w-32">Kode Dept</th>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20">Nama Departemen</th>
              <th className="py-3 px-4 text-left font-medium border-r border-white/20">Sub Departemen Dari</th>
              <th className="py-3 px-4 text-center font-medium w-32 border-r border-white/20">Status</th>
              <th className="py-3 px-4 text-center font-medium w-28">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {showForm && (
              <tr className="border-b border-gray-200 dark:border-slate-700 bg-blue-50/50 dark:bg-blue-900/20">
                <td className="py-2 px-4">
                  <input type="text" className={formInputClass} placeholder="Kode..." value={formData.kode} onChange={(e) => setFormData({ ...formData, kode: e.target.value })} />
                </td>
                <td className="py-2 px-4">
                  <input type="text" className={formInputClass} placeholder="Nama Departemen..." value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} />
                </td>
                <td className="py-2 px-4">
                  <input type="text" className={formInputClass} placeholder="Sub Dept..." value={formData.sub} onChange={(e) => setFormData({ ...formData, sub: e.target.value })} />
                </td>
                <td className="py-2 px-4 text-center">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs border border-blue-200 dark:border-blue-800">{formData.status}</span>
                </td>
                <td className="py-2 px-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button onClick={handleSave} className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700" title="Simpan">
                      <Save className="w-4 h-4" />
                    </button>
                    <button onClick={() => { setShowForm(false); setFormData({ kode: '', nama: '', sub: '', status: 'Aktif' }); }} className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600" title="Batal">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            )}
            {filteredData.map((item, index) => (
              editingKode === item.kode ? (
                <tr key={`edit-${item.kode}`} className="border-b border-gray-200 dark:border-slate-700 bg-yellow-50/50 dark:bg-yellow-900/10">
                  <td className="py-2 px-4">
                    <input type="text" className={formInputClass} placeholder="Kode..." value={formData.kode} onChange={(e) => setFormData({ ...formData, kode: e.target.value })} />
                  </td>
                  <td className="py-2 px-4">
                    <input type="text" className={formInputClass} placeholder="Nama Departemen..." value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} />
                  </td>
                  <td className="py-2 px-4">
                    <input type="text" className={formInputClass} placeholder="Sub Dept..." value={formData.sub} onChange={(e) => setFormData({ ...formData, sub: e.target.value })} />
                  </td>
                  <td className="py-2 px-4 text-center">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs border border-blue-200 dark:border-blue-800">{formData.status}</span>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button onClick={handleSave} className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700" title="Simpan">
                        <Save className="w-4 h-4" />
                      </button>
                      <button onClick={() => { setEditingKode(null); setFormData({ kode: '', nama: '', sub: '', status: 'Aktif' }); }} className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600" title="Batal">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={item.kode} className={`border-b border-gray-100 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer transition-colors ${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-gray-50/50 dark:bg-slate-800/50'}`}>
                  <td className="py-3 px-4 text-sm text-blue-700 dark:text-blue-400 font-medium">{item.kode}</td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">{item.nama}</td>
                  <td className={`py-3 px-4 text-sm ${item.sub === '-' || !item.sub ? 'text-gray-500 dark:text-gray-500 italic' : 'text-gray-600 dark:text-gray-400'}`}>{item.sub || '-'}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs border border-blue-200 dark:border-blue-800">{item.status}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button onClick={() => handleEdit(item)} className="p-1.5 bg-yellow-500 text-white rounded hover:bg-yellow-600" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(item.kode)} className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600" title="Hapus">
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

export default DepartemenTab;
import { Warehouse } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface BarangGudang {
  gudang: string;
  namaBarang: string;
  kuantitas: string;
  nilai: string;
}

const DUMMY_DATA: BarangGudang[] = [
  { gudang: 'Gudang Pusat', namaBarang: 'Laptop ASUS ROG Strix', kuantitas: '10', nilai: '250.000.000' },
  { gudang: 'Gudang Jakbar', namaBarang: 'Laptop ASUS ROG Strix', kuantitas: '5', nilai: '125.000.000' },
  { gudang: 'Gudang Pusat', namaBarang: 'Keyboard Mechanical Keychron', kuantitas: '25', nilai: '30.000.000' },
  { gudang: 'Gudang Jakbar', namaBarang: 'Keyboard Mechanical Keychron', kuantitas: '5', nilai: '6.000.000' },
];

const COLUMNS: ColumnDef<BarangGudang>[] = [
  { header: 'Gudang', accessorKey: 'gudang' },
  { header: 'Nama Barang', accessorKey: 'namaBarang' },
  { header: 'Kuantitas Stok', accessorKey: 'kuantitas' },
  { header: 'Nilai Persediaan', accessorKey: 'nilai' },
];

const BarangGudangTab: React.FC = () => {
  return (
    <TabelModulGenerik
      title="Barang per Gudang"
      icon={<Warehouse className="w-6 h-6" />}
      columns={COLUMNS}
      data={DUMMY_DATA}
    />
  );
};
export default BarangGudangTab;
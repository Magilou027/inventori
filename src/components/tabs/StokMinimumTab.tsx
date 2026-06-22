import { TrendingDown } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface StokMinimum {
  kode: string;
  nama: string;
  stok: string;
  minimum: string;
  status: string;
}

const DUMMY_DATA: StokMinimum[] = [
  { kode: 'ITEM-004', nama: 'Mouse Logitech MX Master', stok: '3', minimum: '5', status: 'Perlu Pesan Ulang' },
  { kode: 'ITEM-005', nama: 'Kertas A4 80gr', stok: '10', minimum: '20', status: 'Perlu Pesan Ulang' },
  { kode: 'ITEM-001', nama: 'Laptop ASUS ROG Strix', stok: '15', minimum: '5', status: 'Cukup' },
];

const COLUMNS: ColumnDef<StokMinimum>[] = [
  { header: 'Kode Barang', accessorKey: 'kode' },
  { header: 'Nama Barang', accessorKey: 'nama' },
  { header: 'Stok Saat Ini', accessorKey: 'stok' },
  { header: 'Batas Minimum', accessorKey: 'minimum' },
  { header: 'Status Peringatan', accessorKey: 'status' },
];

const StokMinimumTab: React.FC = () => {
  return (
    <TabelModulGenerik
      title="Laporan Stok Minimum"
      icon={<TrendingDown className="w-6 h-6 text-red-500" />}
      columns={COLUMNS}
      data={DUMMY_DATA}
    />
  );
};
export default StokMinimumTab;
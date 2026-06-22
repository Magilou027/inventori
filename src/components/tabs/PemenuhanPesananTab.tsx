import { PackageCheck } from 'lucide-react';
import TabelModulGenerik from '../ui/TabelModulGenerik';

interface PemenuhanPesanan {
  tanggal: string;
  noDo: string;
  pelanggan: string;
  gudang: string;
  status: string;
}

const DUMMY_DATA: PemenuhanPesanan[] = [
  { tanggal: '03/05/2026', noDo: 'DO.2026.05.00008', pelanggan: 'Bendian Koh', gudang: 'Gudang Pusat', status: 'Terkirim' },
  { tanggal: '02/05/2026', noDo: 'DO.2026.05.00007', pelanggan: 'Aaron Tanjaya', gudang: 'Gudang Pusat', status: 'Terkirim' },
  { tanggal: '01/05/2026', noDo: 'DO.2026.05.00006', pelanggan: 'Rosalia Chrestina', gudang: 'Gudang Pusat', status: 'Menunggu Dikirim' },
];

const COLUMNS = [
  { header: 'Tanggal', accessorKey: 'tanggal' },
  { header: 'No. DO', accessorKey: 'noDo' },
  { header: 'Pelanggan', accessorKey: 'pelanggan' },
  { header: 'Gudang Pengirim', accessorKey: 'gudang' },
  { header: 'Status Pengiriman', accessorKey: 'status' },
];

const PemenuhanPesananTab: React.FC = () => {
  return (
    <TabelModulGenerik
      title="Pemenuhan Pesanan (Delivery)"
      icon={<PackageCheck className="w-6 h-6" />}
      columns={COLUMNS}
      data={DUMMY_DATA}
    />
  );
};
export default PemenuhanPesananTab;
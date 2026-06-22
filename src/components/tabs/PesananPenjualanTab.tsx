import { Calculator } from 'lucide-react';
import TabelModulGenerik from '../ui/TabelModulGenerik';

interface PesananPenjualan {
  tanggal: string;
  noSo: string;
  pelanggan: string;
  nilai: string;
  status: string;
}

const DUMMY_DATA: PesananPenjualan[] = [
  { tanggal: '03/05/2026', noSo: 'SO.2026.05.00009', pelanggan: 'Bendian Koh', nilai: '1.936.937', status: 'Selesai' },
];

const COLUMNS = [
  { header: 'Tanggal', accessorKey: 'tanggal' },
  { header: 'No. SO', accessorKey: 'noSo' },
  { header: 'Pelanggan', accessorKey: 'pelanggan' },
  { header: 'Nilai Total', accessorKey: 'nilai' },
  { header: 'Status Pesanan', accessorKey: 'status' },
];

const PesananPenjualanTab: React.FC = () => (
  <TabelModulGenerik title="Pesanan Penjualan (SO)" icon={<Calculator className="w-6 h-6" />} columns={COLUMNS} data={DUMMY_DATA} />
);

export default PesananPenjualanTab;
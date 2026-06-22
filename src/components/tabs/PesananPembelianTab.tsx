// @ts-nocheck
import { ShoppingCart } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface PesananPembelian {
  tanggal: string;
  noPo: string;
  pemasok: string;
  nilai: string;
  status: string;
}

const PesananPembelianTab: React.FC = () => {
  const DUMMY_DATA: PesananPembelian[] = [
    { tanggal: '01/05/2026', noPo: 'PO/2026/05/001', pemasok: 'PT. Komputer Jaya', nilai: '250.000.000', status: 'Selesai' },
    { tanggal: '02/05/2026', noPo: 'PO/2026/05/002', pemasok: 'CV. Sinar Abadi', nilai: '15.750.000', status: 'Diproses' },
  ];
  
  const COLUMNS: ColumnDef<PesananPembelian>[] = [
    { header: 'Tanggal', accessorKey: 'tanggal' },
    { header: 'No. PO', accessorKey: 'noPo' },
    { header: 'Pemasok', accessorKey: 'pemasok' },
    { header: 'Nilai Total', accessorKey: 'nilai' },
    { header: 'Status Pesanan', accessorKey: 'status' },
  ];

  return (
    <TabelModulGenerik title="Pesanan Pembelian (PO)" icon={<ShoppingCart className="w-6 h-6" />} columns={COLUMNS} data={DUMMY_DATA} />
  );
};

export default PesananPembelianTab;
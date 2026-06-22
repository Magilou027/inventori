// @ts-nocheck
import { Truck } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface PenerimaanBarang {
  tanggal: string;
  noPenerimaan: string;
  pemasok: string;
  gudang: string;
  status: string;
}

const DUMMY_DATA: PenerimaanBarang[] = [
  { tanggal: '01/05/2026', noPenerimaan: 'RI/2026/05/001', pemasok: 'PT. Komputer Jaya', gudang: 'Gudang Pusat', status: 'Selesai' },
];

const COLUMNS: ColumnDef<PenerimaanBarang>[] = [
  { header: 'Tanggal', accessorKey: 'tanggal' },
  { header: 'No. Penerimaan', accessorKey: 'noPenerimaan' },
  { header: 'Pemasok', accessorKey: 'pemasok' },
  { header: 'Gudang Penerima', accessorKey: 'gudang' },
  { header: 'Status', accessorKey: 'status' },
];

const PenerimaanBarangTab: React.FC = () => (
  <TabelModulGenerik title="Penerimaan Barang (RI)" icon={<Truck className="w-6 h-6" />} columns={COLUMNS} data={DUMMY_DATA} />
);

export default PenerimaanBarangTab;
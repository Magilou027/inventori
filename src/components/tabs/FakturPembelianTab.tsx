// @ts-nocheck
import { FileText } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface FakturPembelian {
  tanggal: string;
  noFaktur: string;
  pemasok: string;
  nilai: string;
  status: string;
}

const DUMMY_DATA: FakturPembelian[] = [
  { tanggal: '01/05/2026', noFaktur: 'PI/2026/05/001', pemasok: 'PT. Komputer Jaya', nilai: '277.500.000', status: 'Lunas' },
];

const COLUMNS: ColumnDef<FakturPembelian>[] = [
  { header: 'Tanggal', accessorKey: 'tanggal' },
  { header: 'No. Faktur', accessorKey: 'noFaktur' },
  { header: 'Pemasok', accessorKey: 'pemasok' },
  { header: 'Nilai Total (IDR)', accessorKey: 'nilai' },
  { header: 'Status Pembayaran', accessorKey: 'status' },
];

const FakturPembelianTab: React.FC = () => (
  <TabelModulGenerik title="Faktur Pembelian" icon={<FileText className="w-6 h-6" />} columns={COLUMNS} data={DUMMY_DATA} />
);

export default FakturPembelianTab;
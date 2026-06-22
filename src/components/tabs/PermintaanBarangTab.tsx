// @ts-nocheck
import { ClipboardList } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface PermintaanBarang {
  tanggal: string;
  noPermintaan: string;
  tipe: string;
  pemohon: string;
  status: string;
}

const PermintaanBarangTab: React.FC = () => {
  const DUMMY_DATA: PermintaanBarang[] = [
    { tanggal: '03/05/2026', noPermintaan: 'PR.2026.05.00001', tipe: 'Pembelian', pemohon: 'Gudang Pusat', status: 'Selesai' },
    { tanggal: '02/05/2026', noPermintaan: 'PR.2026.05.00002', tipe: 'Transfer Stok', pemohon: 'IT & Infrastructure', status: 'Menunggu Persetujuan' },
    { tanggal: '01/05/2026', noPermintaan: 'PR.2026.05.00003', tipe: 'Pembelian', pemohon: 'Marketing & Sales', status: 'Diproses' },
  ];

  const COLUMNS: ColumnDef<PermintaanBarang>[] = [
    { header: 'Tanggal', accessorKey: 'tanggal' },
    { header: 'No. Permintaan', accessorKey: 'noPermintaan' },
    { header: 'Tipe Permintaan', accessorKey: 'tipe' },
    { header: 'Pemohon', accessorKey: 'pemohon' },
    { header: 'Status', accessorKey: 'status' },
  ];

  return (
  <TabelModulGenerik<PermintaanBarang>
    title="Permintaan Barang"
    icon={<ClipboardList className="w-6 h-6" />}
    columns={COLUMNS}
    data={DUMMY_DATA}
  />
);
};
export default PermintaanBarangTab;
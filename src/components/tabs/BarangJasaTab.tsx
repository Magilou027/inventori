import { PackageSearch } from 'lucide-react';
import TabelModulGenerik, { type ColumnDef } from '../ui/TabelModulGenerik';

interface BarangJasa {
  kode: string;
  nama: string;
  kategori: string;
  stok: string;
  satuan: string;
  harga: string;
}

const DUMMY_DATA: BarangJasa[] = [
  { kode: 'ITEM-001', nama: 'Laptop ASUS ROG Strix', kategori: 'Elektronik', stok: '15', satuan: 'Unit', harga: '25.000.000' },
  { kode: 'ITEM-002', nama: 'Keyboard Mechanical Keychron', kategori: 'Aksesoris Komputer', stok: '30', satuan: 'Pcs', harga: '1.200.000' },
  { kode: 'SVC-001', nama: 'Jasa Instalasi Jaringan', kategori: 'Jasa IT', stok: 'N/A', satuan: 'Jam', harga: '500.000' },
  { kode: 'ITEM-003', nama: 'Monitor LG UltraGear 27"', kategori: 'Elektronik', stok: '10', satuan: 'Unit', harga: '4.500.000' },
];

const COLUMNS: ColumnDef<BarangJasa>[] = [
  { header: 'Kode Barang', accessorKey: 'kode' },
  { header: 'Nama Barang', accessorKey: 'nama' },
  { header: 'Kategori', accessorKey: 'kategori' },
  { header: 'Stok Total', accessorKey: 'stok' },
  { header: 'Satuan Dasar', accessorKey: 'satuan' },
  { header: 'Harga Jual (IDR)', accessorKey: 'harga' },
];

const BarangJasaTab: React.FC = () => {
  return (
    <TabelModulGenerik
      title="Barang & Jasa (Katalog)"
      icon={<PackageSearch className="w-6 h-6" />}
      columns={COLUMNS}
      data={DUMMY_DATA}
    />
  );
};
export default BarangJasaTab;
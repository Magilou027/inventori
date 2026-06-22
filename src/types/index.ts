import type { ReactNode, MouseEvent } from 'react';

// ─── Tab System ────────────────────────────────────────────────

export type TabType = 'dashboard' | 'customer' | 'uang_muka' | 'faktur' | 'module';

export interface TabItem {
  id: string;
  title: string;
  type: TabType;
  icon: ReactNode | null;
}

// ─── Sidebar ───────────────────────────────────────────────────

export type SidebarMenuName =
  | 'pengaturan'
  | 'perusahaan'
  | 'buku_besar'
  | 'persediaan'
  | 'pembelian'
  | 'penjualan'
  | 'smartlink_tax'
  | 'daftar_laporan'
  | null;

// ─── UI Component Props ───────────────────────────────────────

export interface InputRowProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'toggle' | 'number' | 'email';
  rightIcon?: ReactNode;
  defaultValue?: string;
}

export interface SelectRowProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: ReactNode;
}

export interface TabelModulGenerikProps {
  title: string;
  icon: ReactNode;
  columns: string[];
}

// ─── Dashboard Data ───────────────────────────────────────────

export interface CustomerSalesItem {
  name: string;
  amount: string;
  pct: string;
  color: string;
  rank: number;
  icon: ReactNode;
}

export interface SellerPerformanceItem {
  name: string;
  amount: string;
  pct: string;
}

export interface OrbiboxStoreApp {
  name: string;
  desc: string;
  icon: ReactNode;
  color: string;
}

// ─── Layout Component Props ───────────────────────────────────

export interface SidebarProps {
  activeSidebarMenu: SidebarMenuName;
  setActiveSidebarMenu: (menu: SidebarMenuName) => void;
  handleOpenTab: (
    id: string,
    title: string,
    type: TabType,
    icon: ReactNode | null,
  ) => void;
}

export interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export interface TabBarProps {
  tabs: TabItem[];
  activeTabId: string;
  setActiveTabId: (id: string) => void;
  closeTab: (e: MouseEvent<SVGElement>, id: string) => void;
}

export interface SubHeaderProps {
  activeTabId: string;
}

export interface FooterProps {
  isDarkMode: boolean;
}

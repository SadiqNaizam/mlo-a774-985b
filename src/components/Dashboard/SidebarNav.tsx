import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  ShoppingCart, 
  Mail, 
  Package, 
  Calendar, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users, active: false },
  { href: '#', label: 'Customers', icon: User, active: false },
  { href: '#', label: 'Proposals', icon: FileText, active: false },
  { href: '#', label: 'Invoices', icon: Receipt, active: false },
  { href: '#', label: 'Items', icon: ShoppingCart, active: false },
  { href: '#', label: 'Mail', icon: Mail, active: false },
  { href: '#', label: 'Shoebox', icon: Package, active: false },
  { href: '#', label: 'Calendar', icon: Calendar, active: false },
];

const helpNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle, active: false },
  { href: '#', label: 'Settings', icon: Settings, active: false },
  // A duplicate help icon is shown in the image, so it's added here for visual accuracy.
  { href: '#', label: 'Help', icon: HelpCircle, active: false }, 
];

const SidebarNav: React.FC = () => {
  const renderNavItem = (item: NavItem, index: number) => {
    const Icon = item.icon;
    return (
      <a
        key={`${item.label}-${index}`}
        href={item.href}
        className={cn(
          'flex items-center px-4 py-2 text-sm font-medium rounded-md',
          'text-gray-700 hover:bg-gray-200',
          item.active && 'bg-blue-100 text-blue-700 hover:bg-blue-200'
        )}
      >
        <Icon className="mr-3 h-5 w-5" />
        <span>{item.label}</span>
      </a>
    );
  };

  return (
    <div className="flex h-full flex-col bg-[#EDEFF2] p-4">
      <nav className="flex-1 space-y-2">
        {mainNavItems.map(renderNavItem)}
      </nav>
      <div className="mt-auto space-y-2">
        {helpNavItems.map(renderNavItem)}
      </div>
    </div>
  );
};

export default SidebarNav;

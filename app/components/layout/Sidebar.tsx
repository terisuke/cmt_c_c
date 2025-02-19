import { NavLink } from '@remix-run/react';
import {
  Calendar,
  Files,
  FolderOpen,
  LayoutDashboard,
  Users,
  type LucideProps
} from 'lucide-react';

interface NavItem {
  label: string;
  to: string;
  icon: React.ComponentType<LucideProps>;
}

const navItems: NavItem[] = [
  { label: 'ダッシュボード', to: '/', icon: LayoutDashboard },
  { label: '文書一覧', to: '/documents', icon: Files },
  { label: 'プロジェクト', to: '/projects', icon: FolderOpen },
  { label: '取引先', to: '/clients', icon: Users },
  { label: 'スケジュール', to: '/schedule', icon: Calendar },
];

export const Sidebar: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-50 h-full border-r border-gray-200">
      <div className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => 
                  `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
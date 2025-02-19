import { Link } from '@remix-run/react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '../common';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="h-16 px-4 flex items-center justify-between">
        {/* ロゴ・タイトル */}
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            文書管理システム
          </Link>
        </div>

        {/* 右側のアクション */}
        <div className="flex items-center space-x-4">
          {/* 通知ボタン */}
          <Button
            variant="secondary"
            size="sm"
            icon={Bell}
            aria-label="通知"
          />
          
          {/* 設定ボタン */}
          <Button
            variant="secondary"
            size="sm"
            icon={Settings}
            aria-label="設定"
          />

          {/* ユーザーメニュー */}
          <div className="flex items-center">
            <button
              type="button"
              className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">ユーザーメニューを開く</span>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">U</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import { FileText, ChevronRight } from 'lucide-react';
import { Link } from '@remix-run/react';
import type { Document } from '~/utils/types';
import { getStatusLabel, getStatusStyle } from '~/utils/documentHelpers';

interface DocumentCardProps {
  document: Document;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-lg text-gray-900">{document.title}</h3>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <span>案件番号: {document.projectCode}</span>
            {document.amount && <span>金額: ¥{document.amount}</span>}
            {document.contractor && <span>取引先: {document.contractor}</span>}
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${getStatusStyle(document.status)}`}>
          {getStatusLabel(document.status)}
        </span>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          作成日: {document.createdAt}
          {document.updatedAt !== document.createdAt && ` / 更新日: ${document.updatedAt}`}
        </div>
        <Link 
          to={`/documents/${document.id}`}
          className="flex items-center text-blue-600 text-sm hover:text-blue-800"
        >
          詳細を見る
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};
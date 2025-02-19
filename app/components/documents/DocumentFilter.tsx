// app/components/documents/DocumentFilter.tsx
import { Folder } from 'lucide-react';
import { DOCUMENT_TYPES } from '~/utils/constants';

interface DocumentFilterProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export const DocumentFilter: React.FC<DocumentFilterProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-gray-900 mb-4">文書タイプ</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onTypeChange('all')}
            className={`flex items-center w-full p-2 rounded-md transition-colors ${
              selectedType === 'all' 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Folder className="mr-2" size={20} />
            すべての文書
          </button>
        </li>
        {DOCUMENT_TYPES.map(type => (
          <li key={type.id}>
            <button
              onClick={() => onTypeChange(type.id)}
              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                selectedType === type.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <type.icon className="mr-2" size={20} />
              {type.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
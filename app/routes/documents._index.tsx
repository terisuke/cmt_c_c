import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Search, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button, Input } from '~/components/common';
import { DocumentCard } from '~/components/documents/DocumentCard';
import { DocumentFilter } from '~/components/documents/DocumentFilter';
import { mockDocuments } from '~/mocks/documents';

export async function loader() {
  return json({ documents: mockDocuments });
}

export default function DocumentsIndex() {
  const { documents } = useLoaderData<typeof loader>();
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documents
    .filter(doc => selectedType === 'all' || doc.type === selectedType)
    .filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.projectCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.contractor?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="max-w-7xl mx-auto">
      {/* ヘッダー部分 */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">文書一覧</h1>
          <Button to="/documents/new" icon={Plus}>
            新規作成
          </Button>
        </div>
        <div className="mt-4">
          <Input
            placeholder="文書を検索..."
            icon={Search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
          />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="grid grid-cols-4 gap-6">
        {/* サイドバー */}
        <div className="col-span-1">
          <DocumentFilter
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
        </div>

        {/* 文書一覧 */}
        <div className="col-span-3">
          <div className="space-y-4">
            {filteredDocuments.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                文書が見つかりませんでした
              </div>
            ) : (
              filteredDocuments.map(document => (
                <DocumentCard key={document.id} document={document} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
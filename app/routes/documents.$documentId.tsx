import { json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import {
  ArrowLeft,
  Download,
  Edit2,
  FileText,
  History,
  Share2,
  Trash2
} from 'lucide-react';
import { Button } from '~/components/common';
import { mockDocuments } from '~/mocks/documents';
import { getStatusLabel, getStatusStyle } from '~/utils/documentHelpers';
import type { Document } from '~/utils/types';

interface LoaderData {
  document: Document;
}

export async function loader({ params }: { params: { documentId: string } }) {
  const document = mockDocuments.find(doc => doc.id === params.documentId);

  if (!document) {
    throw new Response("文書が見つかりません", { status: 404 });
  }

  return json({ document });
}

export default function DocumentDetail() {
  const { document } = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);  // ブラウザの履歴を1つ戻る
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-6">
        <Button 
          variant="secondary" 
          icon={ArrowLeft}
          onClick={handleBack}
          size="sm"
        >
          戻る
        </Button>
        
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {document.title}
            </h1>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              <span>案件番号: {document.projectCode}</span>
              <span>取引先: {document.contractor}</span>
              <span className={`px-2 py-1 rounded-full ${getStatusStyle(document.status)}`}>
                {getStatusLabel(document.status)}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" icon={Download} size="sm">
              ダウンロード
            </Button>
            <Button variant="outline" icon={Share2} size="sm">
              共有
            </Button>
            <Button variant="outline" icon={History} size="sm">
              履歴
            </Button>
            <Button variant="outline" icon={Edit2} size="sm">
              編集
            </Button>
            <Button variant="outline" icon={Trash2} size="sm" 
              className="text-red-600 hover:bg-red-50">
              削除
            </Button>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="grid grid-cols-3 gap-6">
        {/* 文書内容 */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 text-gray-700 mb-4">
              <FileText size={20} />
              <h2 className="text-lg font-medium">文書内容</h2>
            </div>
            <div className="whitespace-pre-wrap text-gray-600">
              {document.content}
            </div>
          </div>
        </div>

        {/* サイドバー情報 */}
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">文書情報</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">作成日</dt>
                <dd className="mt-1 text-sm text-gray-900">{document.createdAt}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">最終更新日</dt>
                <dd className="mt-1 text-sm text-gray-900">{document.updatedAt}</dd>
              </div>
              {document.amount && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">金額</dt>
                  <dd className="mt-1 text-sm text-gray-900">¥{document.amount}</dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-medium text-gray-500">ステータス</dt>
                <dd className="mt-1">
                  <span className={`inline-flex px-2 py-1 text-xs rounded ${getStatusStyle(document.status)}`}>
                    {getStatusLabel(document.status)}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* 関連文書（オプション） */}
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">関連文書</h2>
            {document.relatedDocuments && document.relatedDocuments.length > 0 ? (
              <ul className="space-y-2">
                {document.relatedDocuments.map(relatedId => {
                  const relatedDoc = mockDocuments.find(doc => doc.id === relatedId);
                  return relatedDoc ? (
                    <li key={relatedId} className="text-sm text-gray-600">
                      {relatedDoc.title}
                    </li>
                  ) : null;
                })}
              </ul>
            ) : (
              <div className="text-sm text-gray-500">
                関連する文書はありません
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
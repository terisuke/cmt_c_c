/* eslint-disable @typescript-eslint/no-unused-vars */
// app/routes/documents.$documentId.edit.tsx
import { json, redirect, type ActionFunctionArgs } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '~/components/common';
import { DocumentForm } from '~/components/documents/DocumentForm';
import { mockDocuments } from '~/mocks/documents';
import type { Document } from '~/utils/types';

interface LoaderData {
  document: Document;
}

export async function loader({ params }: { params: { documentId: string } }) {
  const document = mockDocuments.find(doc => doc.id === params.documentId);
  
  if (!document) {
    throw new Response('文書が見つかりません', { status: 404 });
  }

  return json({ document });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // 実際のアプリケーションではここでデータベースの更新を行う
  const updatedDocument = {
    id: params.documentId,
    title: formData.get('title'),
    type: formData.get('type'),
    projectCode: formData.get('projectCode'),
    contractor: formData.get('contractor'),
    amount: formData.get('amount'),
    content: formData.get('content'),
    status: formData.get('status'),
    updatedAt: new Date().toISOString().split('T')[0]
  };

  // 更新が成功したら詳細ページにリダイレクト
  return redirect(`/documents/${params.documentId}`);
}

export default function DocumentEdit() {
  const { document } = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="secondary" 
          icon={ArrowLeft}
          onClick={() => navigate(-1)}
          size="sm"
        >
          戻る
        </Button>
        
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900">
            文書の編集
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            文書の内容を編集します。
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <DocumentForm
          mode="edit"
          defaultValues={document}
        />
      </div>
    </div>
  );
}
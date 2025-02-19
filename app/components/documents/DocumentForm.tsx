import { Form } from '@remix-run/react';
import React from 'react';
import { Input, Select } from '~/components/common';
import { DOCUMENT_TYPES } from '~/utils/constants';
import type { Document } from '~/utils/types';

interface DocumentFormProps {
  defaultValues?: Partial<Document>;
  mode: 'create' | 'edit';
}

export const DocumentForm: React.FC<DocumentFormProps> = ({
  defaultValues,
  mode
}) => {
  return (
    <Form method="post" className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <Input
            label="タイトル"
            name="title"
            defaultValue={defaultValues?.title}
            required
          />
        </div>

        <Select
          label="文書タイプ"
          name="type"
          options={DOCUMENT_TYPES.map(type => ({
            value: type.id,
            label: type.label
          }))}
          defaultValue={defaultValues?.type}
          required
        />

        <Input
          label="案件番号"
          name="projectCode"
          defaultValue={defaultValues?.projectCode}
          required
        />

        <Input
          label="取引先"
          name="contractor"
          defaultValue={defaultValues?.contractor}
        />

        <Input
          label="金額"
          name="amount"
          type="text"
          defaultValue={defaultValues?.amount}
        />

        <div className="col-span-2">
          <label 
            htmlFor="content" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            文書内容
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            defaultValue={defaultValues?.content}
          />
        </div>
      </div>

      <Select
        label="ステータス"
        name="status"
        options={[
          { value: 'draft', label: '下書き' },
          { value: 'pending', label: '承認待ち' },
          { value: 'active', label: '確定' }
        ]}
        defaultValue={defaultValues?.status || 'draft'}
        required
      />

      <div className="flex justify-end gap-4">
        <input type="hidden" name="id" value={defaultValues?.id} />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {mode === 'create' ? '作成' : '更新'}
        </button>
      </div>
    </Form>
  );
};
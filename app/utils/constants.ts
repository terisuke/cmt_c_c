import { FileText } from 'lucide-react';

export const DOCUMENT_TYPES = [
  { id: 'estimate', label: '見積書', icon: FileText },
  { id: 'contract', label: '契約書', icon: FileText },
  { id: 'report', label: '報告書', icon: FileText },
  { id: 'drawing', label: '図面', icon: FileText }
] as const;

export const STATUS_MAP = {
  active: { label: '確定', style: 'bg-green-100 text-green-800' },
  draft: { label: '下書き', style: 'bg-gray-100 text-gray-800' },
  pending: { label: '承認待ち', style: 'bg-yellow-100 text-yellow-800' }
} as const;
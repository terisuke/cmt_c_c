import type { Document } from "~/utils/types";

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: '◆○○○邸工事見積（マンション内改修工事）',
    type: 'estimate',
    projectCode: 'P2024-001',
    amount: '730,000',
    status: 'active',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20',
    contractor: '株式会社○○工務店',
    content: `
      1. 工事概要
      - マンション内装改修工事
      - 工期：2024年3月1日〜2024年4月30日
      
      2. 見積金額
      - 本体工事：650,000円
      - 諸経費：80,000円
      - 合計：730,000円（税抜）
    `
  },
  {
    id: '2',
    title: '工事請負契約書',
    type: 'contract',
    projectCode: 'P2024-001',
    status: 'pending',
    createdAt: '2024-02-21',
    updatedAt: '2024-02-21',
    contractor: '株式会社○○工務店',
    relatedDocuments: ['1']
  },
  {
    id: '3',
    title: '見積書修正案',
    type: 'estimate',
    projectCode: 'P2024-001',
    amount: '750,000',
    status: 'draft',
    createdAt: '2024-02-22',
    updatedAt: '2024-02-22',
    contractor: '株式会社○○工務店',
    relatedDocuments: ['1']
  }
];

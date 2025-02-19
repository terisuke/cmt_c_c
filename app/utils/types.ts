export type DocumentStatus = 'active' | 'draft' | 'pending';
export type DocumentType = 'estimate' | 'contract' | 'report' | 'drawing';

export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  projectCode: string;
  amount?: string;
  status: DocumentStatus;
  createdAt: string;
  updatedAt: string;
  contractor?: string;
  relatedDocuments?: string[];
  content?: string;
}

export interface Project {
  id: string;
  name: string;
  code: string;
  status: 'active' | 'completed' | 'pending';
  startDate: string;
  endDate?: string;
  documents?: Document[];
}
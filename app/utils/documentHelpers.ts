import { STATUS_MAP } from './constants';
import type { DocumentStatus } from './types';

export const getStatusLabel = (status: DocumentStatus): string => {
  return STATUS_MAP[status]?.label || status;
};

export const getStatusStyle = (status: DocumentStatus): string => {
  return STATUS_MAP[status]?.style || 'bg-gray-100 text-gray-800';
};
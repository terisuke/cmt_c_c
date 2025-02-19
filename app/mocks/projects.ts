import type { Project } from "~/utils/types";

export const mockProjects: Project[] = [
  {
    id: '1',
    name: '○○○邸改修工事',
    code: 'P2024-001',
    status: 'active',
    startDate: '2024-03-01',
    endDate: '2024-04-30'
  }
];

// app/mocks/index.ts
export * from './documents';
export * from './projects';
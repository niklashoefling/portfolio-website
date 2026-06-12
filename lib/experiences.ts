export type ItemType = 'Rotation' | 'Experience' | 'Education';
export type ItemStatus = 'active' | 'done';

export interface CvItem {
  id: string;
  type: ItemType;
  status: ItemStatus;
  title: string;
  organization: string;
  duration: string;
  description: string;
  parentId?: string;
}

export const cvData: CvItem[] = [
  {
    id: 'sap-star',
    type: 'Experience',
    status: 'active',
    title: 'STAR Student - Software Engineering',
    organization: 'SAP',
    duration: 'Sep 2025 - Present',
    description:
      'Part of the SAP STAR program, combining academic studies with practical engineering rotations across different global departments.',
  },
  {
    id: 'sap-s4hana-rotation',
    type: 'Rotation',
    status: 'done',
    title: 'S/4HANA Cloud Foundation - AI Agent for Developer Tutorials',
    organization: 'SAP',
    duration: 'Jan 2026 - May 2026',
    description:
      'Developing cloud-native AI agents on SAP BTP. Built a multi-agent LLM pipeline using LangGraph and SAP AI SDK to automate developer documentation and Git workflows.',
    parentId: 'sap-star',
  },
  {
    id: 'dhbw',
    type: 'Education',
    status: 'active',
    title: 'B.Sc. Business Information Systems - Software Engineering',
    organization: 'DHBW Mannheim',
    duration: 'Oct 2025 - Sep 2028 (expected)',
    description:
      'Serving as Class Representative, coordinating communication between faculty and students. Focus areas: software engineering, AI, and business.',
  },
  {
    id: 'abitur',
    type: 'Education',
    status: 'done',
    title: 'Abitur',
    organization: 'Gymnasium Mainz-Oberstadt',
    duration: 'Aug 2016 - Mar 2025',
    description:
      'Advanced courses in Mathematics, Computer Science, and English. Grade: 1.6',
  },
];
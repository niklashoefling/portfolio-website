'use client';

import { useState } from 'react';
import ExperienceCard, { CvItem } from '@/app/components/ExperienceCard';

type FilterType = 'all' | 'Rotation' | 'Experience' | 'Education';

const cvData: CvItem[] = [
  {
    type: 'Rotation',
    status: 'active',
    title: 'S/4HANA Cloud Foundation - AI Agent for Developer Tutorials',
    organization: 'SAP',
    duration: 'Jan 2026 - May 2026',
    description:
      'Developing cloud-native AI agents on SAP BTP. Built a multi-agent LLM pipeline using LangGraph and SAP AI SDK to automate developer documentation and Git workflows.',
  },
  {
    type: 'Experience',
    status: 'active',
    title: 'STAR Student - Software Engineering',
    organization: 'SAP',
    duration: 'Sep 2025 - Present',
    description:
      'Part of the SAP STAR program, combining academic studies with practical engineering rotations across different global departments.',
  },
  {
    type: 'Education',
    status: 'active',
    title: 'B.Sc. Business Information Systems - Software Engineering',
    organization: 'DHBW Mannheim',
    duration: 'Oct 2025 - Sep 2028 (expected)',
    description:
      'Serving as Class Representative, coordinating communication between faculty and students. Focus areas: software engineering, AI, and business.',
  },
  {
    type: 'Education',
    status: 'done',
    title: 'Abitur',
    organization: 'Gymnasium Mainz-Oberstadt',
    duration: 'Aug 2016 - Mar 2025',
    description:
      'Advanced courses in Mathematics, Computer Science, and English. Grade: 1.6',
  },
];

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Rotation', value: 'Rotation' },
  { label: 'Experience', value: 'Experience' },
  { label: 'Education', value: 'Education' },
];

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered =
    activeFilter === 'all'
      ? cvData
      : cvData.filter((item) => item.type === activeFilter);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f1115] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.3em] mb-10">
          02. Experience &amp; Education
        </h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-xs px-4 py-1.5 rounded-full border transition-all duration-150 ${
                activeFilter === f.value
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative pl-7">
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-zinc-700/60" />

          <div className="space-y-6">
            {filtered.map((item, index) => (
              <ExperienceCard key={`${item.type}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

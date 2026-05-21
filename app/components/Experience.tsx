'use client';

import { useState } from 'react';
import ExperienceCard from '@/app/components/ExperienceCard';
import { cvData } from '@/lib/experiences';

type FilterType = 'all' | 'Experience' | 'Education';

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
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

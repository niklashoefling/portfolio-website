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

  const topLevel = cvData.filter((item) => !item.parentId);
  const children = cvData.filter((item) => item.parentId);

  const filtered =
    activeFilter === 'all'
      ? topLevel
      : topLevel.filter(
          (item) =>
            item.type === activeFilter ||
            children.some(
              (c) => c.parentId === item.id && c.type === activeFilter
            )
        );

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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-700/60" />

          <div className="space-y-6 pl-7">
            {filtered.map((item) => {
              const itemChildren = children.filter(
                (c) => c.parentId === item.id
              );
              return (
                <div key={item.id}>
                  {/* Dot sits directly on the line */}
                  <div
                    className={`absolute left-[-4.5px] mt-2.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 ${
                      item.status === 'active'
                        ? 'bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)]'
                        : 'bg-zinc-500'
                    }`}
                  />
                  <ExperienceCard item={item} />
                  {itemChildren.length > 0 && (
                    <div className="mt-3 ml-4 pl-4 space-y-3">
                      {itemChildren.map((child) => (
                        <div key={child.id}>
                          <div
                            className={`absolute left-[-4.5px] mt-2.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 ${
                              child.status === 'active'
                                ? 'bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)]'
                                : 'bg-zinc-500'
                            }`}
                          />
                          <ExperienceCard item={child} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

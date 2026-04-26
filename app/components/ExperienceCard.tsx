type ItemType = 'Rotation' | 'Experience' | 'Education';
type ItemStatus = 'active' | 'done';

export interface CvItem {
  type: ItemType;
  status: ItemStatus;
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const TYPE_LABELS: Record<ItemType, string> = {
  Rotation: 'Rotation',
  Experience: 'Experience',
  Education: 'Education',
};

const TYPE_CLASSES: Record<ItemType, string> = {
  Rotation:
    'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  Experience:
    'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  Education:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
};

interface ExperienceCardProps {
  item: CvItem;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-7 top-2.5 w-2.5 h-2.5 rounded-full border-2 border-zinc-900 ${
          item.status === 'active'
            ? 'bg-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.2)]'
            : 'bg-zinc-500'
        }`}
      />

      <div className="group bg-white/5 border border-zinc-700/50 rounded-xl p-5 hover:border-zinc-600/70 transition-all duration-200">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <p className="text-[15px] font-medium text-white leading-snug">
            {item.title}
          </p>
          <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${TYPE_CLASSES[item.type]}`}
            >
              {TYPE_LABELS[item.type]}
            </span>
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                item.status === 'active'
                  ? 'bg-blue-500/15 text-blue-400'
                  : 'bg-zinc-700/60 text-zinc-400'
              }`}
            >
              {item.status === 'active' ? 'Ongoing' : 'Completed'}
            </span>
          </div>
        </div>

        <p className="text-xs text-zinc-500 mb-3">
          {item.organization}&nbsp;·&nbsp;{item.duration}
        </p>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

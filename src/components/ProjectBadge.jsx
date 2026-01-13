export function ProjectBadge({ name, value }) {
  return (
    <span className="inline-flex items-center gap-2">
      {/* Nom */}
      <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium leading-none">
        {name}
      </span>

      {/* Pourcentage */}
      {value !== undefined && (
        <span className="px-3 py-2 rounded-full bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-50 text-sm font-medium leading-none">
          {value}%
        </span>
      )}
    </span>
  );
}

export function ProjectBadge({ name, percent }) {
  return (
    <span
      className="
        inline-flex items-center gap-1
        px-3 py-1 rounded-full max-w-40
        bg-blue-100 dark:bg-blue-800
        text-blue-800 dark:text-blue-100
        text-xs font-medium
      "
    >
      {percent !== undefined ? (
        <>
          <span className="truncate min-w-0">{name}</span>
          <span className="opacity-70 shrink-0 whitespace-nowrap">• {percent}%</span>
        </>
      ) : (
        <span className="truncate min-w-0">{name}</span>
      )}
    </span>
  );
}

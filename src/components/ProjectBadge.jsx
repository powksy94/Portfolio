export function ProjectBadge({ name, value }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        px-5 py-2
        rounded-full
        bg-blue-100 dark:bg-blue-800
        text-blue-800 dark:text-blue-100
        text-sm font-medium
        whitespace-nowrap
      "
    >
      <span>{value !== undefined ? `${name} ${value}%` : name}</span>
    </span>
  );
}

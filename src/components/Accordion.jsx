export default function Accordion({ title, children }) {
  return (
    <details className="group rounded-xl bg-white dark:bg-gray-900 shadow-md">
      <summary className="cursor-pointer select-none px-6 py-4 text-lg font-semibold flex justify-between items-center text-slate-900 dark:text-white">
        {title}
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>

      <div className="px-6 pb-6 space-y-6">
        {children}
      </div>
    </details>
  );
}

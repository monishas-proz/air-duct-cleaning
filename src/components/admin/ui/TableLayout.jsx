export default function TableLayout({
  title,
  actions,
  children,
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      {(title || actions) && (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {title && (
            <h2 className="text-2xl font-semibold text-neutral-800">
              {title}
            </h2>
          )}

          {actions}
        </div>
      )}

      <div className="min-h-0 flex-1">
        {children}
      </div>
    </div>
  );
}
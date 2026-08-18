export default function TableLayout({
  title,
  actions,
  children,
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6">
      {(title || actions) && (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {title && (
            <h2 className="font-heading text-xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h2>
          )}

          {actions}
        </div>
      )}

      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

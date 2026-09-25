type BlogTableProps = {
  caption?: string;
  headers?: string[];
  rows?: { cells?: string[] }[];
};

export function BlogTable({ caption, headers = [], rows = [] }: BlogTableProps) {
  if (!headers.length || !rows.length) return null;

  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-line">
      {caption ? (
        <figcaption className="border-b border-line bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground">
          {caption}
        </figcaption>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand text-white">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-surface">
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="text-foreground/80">
                {(row.cells ?? []).slice(0, headers.length).map((cell, cellIndex) => (
                  <td key={`cell-${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

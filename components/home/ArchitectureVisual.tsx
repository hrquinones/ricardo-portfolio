const NODES = [
  { x: 40, y: 40 },
  { x: 220, y: 30 },
  { x: 40, y: 140 },
  { x: 140, y: 100 },
  { x: 240, y: 140 },
  { x: 140, y: 200 },
];

const EDGES: [number, number][] = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
];

export function ArchitectureVisual() {
  return (
    <svg
      viewBox="0 0 280 240"
      role="img"
      aria-label="Abstract diagram of connected services forming a distributed system"
      className="h-full w-full"
    >
      {EDGES.map(([from, to], index) => {
        const a = NODES[from];
        const b = NODES[to];
        return (
          <line
            key={index}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--border)"
            strokeWidth={1.5}
          />
        );
      })}
      {NODES.map((node, index) => (
        <rect
          key={index}
          x={node.x - 16}
          y={node.y - 16}
          width={32}
          height={32}
          rx={8}
          fill="var(--surface)"
          stroke={index === 3 ? "var(--accent)" : "var(--border)"}
          strokeWidth={index === 3 ? 2 : 1.5}
        />
      ))}
    </svg>
  );
}

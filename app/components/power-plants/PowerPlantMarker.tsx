import type { PowerPlant, PowerPlantType } from "./powerPlants";

export function PlantTypeIcon({
  type,
  className,
}: {
  type: PowerPlantType;
  className?: string;
}) {
  switch (type) {
    case "Gas":
      return (
        <svg viewBox="0 0 24 24" width={24} height={24} className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2c1.3 2.6-1.5 4-1.5 6.8a2.5 2.5 0 0 0 5 0c0-.8-.3-1.5-.7-2 1.4.6 2.7 2.5 2.7 5.2a6 6 0 1 1-12 0c0-3.6 2-5.6 2.8-6.3-.3.9-.2 1.9.7 2.3-.3-2.7-1-4 3-6z"
          />
        </svg>
      );
    case "Wind":
      return (
        <svg viewBox="0 0 24 24" width={24} height={24} className={className} aria-hidden="true">
          <g stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            <path d="M12 12 L12 3.5" transform="rotate(0 12 12)" />
            <path d="M12 12 L12 3.5" transform="rotate(120 12 12)" />
            <path d="M12 12 L12 3.5" transform="rotate(240 12 12)" />
            <path d="M12 12 L12 21" />
          </g>
          <circle cx={12} cy={12} r={1.6} fill="currentColor" />
        </svg>
      );
    case "Renewable":
      return (
        <svg viewBox="0 0 24 24" width={24} height={24} className={className} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3C8 3 4.5 6.5 4.5 12c0 4.7 3.2 8.4 7.5 9.4 4.3-1 7.5-4.7 7.5-9.4C19.5 6.5 16 3 12 3z"
          />
          <path
            d="M12 6.5v12.8"
            stroke="white"
            strokeWidth={1}
            fill="none"
          />
        </svg>
      );
  }
}

type PowerPlantMarkerProps = {
  plant: PowerPlant;
  isActive: boolean;
  onEnter: (
    event: React.MouseEvent<SVGGElement> | React.FocusEvent<SVGGElement>,
  ) => void;
  onLeave: () => void;
  onSelect: (event: React.MouseEvent<SVGGElement>) => void;
};

export default function PowerPlantMarker({
  plant,
  isActive,
  onEnter,
  onLeave,
  onSelect,
}: PowerPlantMarkerProps) {
  const isCurrent = plant.status === "current";
  const radius = isActive ? 9 : 7;

  return (
    <g
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onSelect}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
      role="button"
      aria-label={`${plant.name}, ${plant.location}. ${plant.type}, ${plant.capacity}, ${
        isCurrent ? "current" : "former"
      } asset.`}
      style={{ cursor: "pointer", outline: "none" }}
    >
      <circle
        r={radius}
        fill={isCurrent ? "#2f3593" : "#ffffff"}
        stroke={isCurrent ? "#ffffff" : "#64748b"}
        strokeWidth={isCurrent ? 1.5 : 2}
        style={{ transition: "r 150ms ease-out" }}
      />
      <g
        transform="translate(-6, -6) scale(0.5)"
        style={{ pointerEvents: "none" }}
      >
        <PlantTypeIcon
          type={plant.type}
          className={isCurrent ? "text-white" : "text-slate-500"}
        />
      </g>
    </g>
  );
}

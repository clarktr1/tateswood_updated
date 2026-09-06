"use client";

import { useRef, useState } from "react";
import { MAP_WIDTH, projection } from "./mapProjection";
import PowerPlantList from "./PowerPlantList";
import PowerPlantMap, {
  POPUP_HALF_WIDTH,
  POPUP_TOP_CLEARANCE,
  type PowerPlantTooltip,
} from "./PowerPlantMap";
import PowerPlantTable from "./PowerPlantTable";
import type { PowerPlant } from "./powerPlants";

export default function PowerPlantsExplorer() {
  const [tooltip, setTooltip] = useState<PowerPlantTooltip | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleHoverFromList = (plant: PowerPlant) => {
    const container = mapContainerRef.current;
    if (!container) return;
    const projected = projection(plant.coordinates);
    if (!projected) return;

    const rect = container.getBoundingClientRect();
    const scale = rect.width / MAP_WIDTH;
    const x = Math.min(
      Math.max(projected[0] * scale, POPUP_HALF_WIDTH),
      rect.width - POPUP_HALF_WIDTH,
    );
    const y = Math.max(projected[1] * scale, POPUP_TOP_CLEARANCE);
    setTooltip({ plant, x, y });
  };

  return (
    <div className="space-y-10">
      <div className="hidden gap-6 md:flex">
        <div className="flex-1">
          <PowerPlantMap
            containerRef={mapContainerRef}
            tooltip={tooltip}
            onHover={setTooltip}
            onClear={() => setTooltip(null)}
          />
        </div>
        <div className="w-64 shrink-0">
          <PowerPlantList
            activePlantName={tooltip?.plant.name ?? null}
            onHoverPlant={handleHoverFromList}
            onLeave={() => setTooltip(null)}
          />
        </div>
      </div>
      <PowerPlantTable activePlantName={tooltip?.plant.name ?? null} />
    </div>
  );
}

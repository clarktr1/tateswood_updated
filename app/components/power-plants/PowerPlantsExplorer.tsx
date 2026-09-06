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
      {/* Breaks out of the page's max-w-6xl so the map can be wider than the table below */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="mx-auto hidden max-w-[1440px] justify-center gap-6 px-6 md:flex md:min-h-[650px]">
          <div className="flex-1">
            <PowerPlantMap
              containerRef={mapContainerRef}
              tooltip={tooltip}
              onHover={setTooltip}
              onClear={() => setTooltip(null)}
            />
          </div>
          <div className="shrink-0">
            <PowerPlantList
              activePlantName={tooltip?.plant.name ?? null}
              onHoverPlant={handleHoverFromList}
              onLeave={() => setTooltip(null)}
            />
          </div>
        </div>
      </div>
      <PowerPlantTable activePlantName={tooltip?.plant.name ?? null} />
    </div>
  );
}

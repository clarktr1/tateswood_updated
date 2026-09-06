"use client";

import type { GeoJsonObject } from "geojson";
import type { RefObject } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import rawStatesTopology from "us-atlas/states-10m.json";
import { MAP_HEIGHT, MAP_WIDTH, projection } from "./mapProjection";
import PowerPlantLegend from "./PowerPlantLegend";
import PowerPlantMarker from "./PowerPlantMarker";
import PowerPlantPopup from "./PowerPlantPopup";
import { powerPlants, type PowerPlant } from "./powerPlants";

// us-atlas ships TopoJSON, which react-simple-maps accepts at runtime even
// though its public types only list GeoJSON — cast to satisfy TypeScript.
const statesTopology = rawStatesTopology as unknown as GeoJsonObject;

export type PowerPlantTooltip = { plant: PowerPlant; x: number; y: number };

// The popup is a fixed w-48 (192px) box, so its horizontal clamp margin
// must be at least half that width or it clips against the map's edges.
// The vertical margin must cover the popup's tallest case (a two-line
// plant name plus location, type/capacity, and status badge).
export const POPUP_HALF_WIDTH = 100;
export const POPUP_TOP_CLEARANCE = 145;

type PowerPlantMapProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  tooltip: PowerPlantTooltip | null;
  onHover: (tooltip: PowerPlantTooltip) => void;
  onClear: () => void;
};

export default function PowerPlantMap({
  containerRef,
  tooltip,
  onHover,
  onClear,
}: PowerPlantMapProps) {
  const showTooltip = (
    plant: PowerPlant,
    event: React.MouseEvent<SVGGElement> | React.FocusEvent<SVGGElement>,
  ) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const point = event as React.MouseEvent<SVGGElement>;
    const clientX =
      typeof point.clientX === "number" ? point.clientX : rect.left + rect.width / 2;
    const clientY =
      typeof point.clientY === "number" ? point.clientY : rect.top + 80;
    const x = Math.min(
      Math.max(clientX - rect.left, POPUP_HALF_WIDTH),
      rect.width - POPUP_HALF_WIDTH,
    );
    const y = Math.max(clientY - rect.top, POPUP_TOP_CLEARANCE);
    onHover({ plant, x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-hidden rounded-2xl bg-[#69D8FF] shadow-md ring-1 ring-brand-purple/10"
      onClick={onClear}
    >
      <ComposableMap
        projection={projection}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        className="h-full w-full"
      >
        <Geographies geography={statesTopology}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e2e8f4"
                stroke="#ffffff"
                strokeWidth={0.75}
                tabIndex={-1}
                style={{ outline: "none" }}
              />
            ))
          }
        </Geographies>
        {powerPlants.map((plant) => (
          <Marker key={plant.name} coordinates={plant.coordinates}>
            <PowerPlantMarker
              plant={plant}
              isActive={tooltip?.plant.name === plant.name}
              onEnter={(event) => showTooltip(plant, event)}
              onLeave={onClear}
              onSelect={(event) => {
                event.stopPropagation();
                showTooltip(plant, event);
              }}
            />
          </Marker>
        ))}
      </ComposableMap>

      {tooltip && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full transition-opacity duration-150"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <PowerPlantPopup plant={tooltip.plant} />
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <PowerPlantLegend />
      </div>
    </div>
  );
}

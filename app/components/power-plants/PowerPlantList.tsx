"use client";

import { powerPlants, type PowerPlant } from "./powerPlants";

type PowerPlantListProps = {
  activePlantName: string | null;
  onHoverPlant: (plant: PowerPlant) => void;
  onLeave: () => void;
};

export default function PowerPlantList({
  activePlantName,
  onHoverPlant,
  onLeave,
}: PowerPlantListProps) {
  return (
    <div className="h-full w-84 overflow-y-auto rounded-2xl bg-white p-4 shadow-md ring-1 ring-brand-purple/10">
      <p className="px-2 pb-2 text-xs font-bold uppercase tracking-wide text-foreground/60">
        Projects
      </p>
      <ul>
        {powerPlants.map((plant) => {
          const isActive = activePlantName === plant.name;
          return (
            <li key={plant.name}>
              <button
                type="button"
                onMouseEnter={() => onHoverPlant(plant)}
                onFocus={() => onHoverPlant(plant)}
                onMouseLeave={onLeave}
                onBlur={onLeave}
                className={`block w-full rounded-lg px-2 py-1.5 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                  isActive ? "text-brand-orange" : "text-brand-purple"
                }`}
              >
                {plant.name}
                <span className="text-foreground/40"> - </span>
                <span
                  className={`text-xs ${
                    isActive ? "text-brand-orange/70" : "text-foreground/50"
                  }`}
                >
                  {plant.location}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

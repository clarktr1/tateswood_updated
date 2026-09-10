import { PlantTypeIcon } from "./PowerPlantMarker";
import type { PowerPlantType } from "./powerPlants";

const types: PowerPlantType[] = ["Gas", "Wind", "Renewable"];

export default function PowerPlantLegend() {
  return (
    <div className="rounded-xl bg-white/95 p-4 shadow-md ring-1 ring-brand-purple/10 backdrop-blur-sm">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-foreground/60">
          Generation Type
        </p>
        <div className="mt-2 flex flex-col gap-1.5">
          {types.map((type) => (
            <span
              key={type}
              className="flex items-center gap-1.5 text-xs text-foreground"
            >
              <PlantTypeIcon type={type} className="h-3.5 w-3.5 text-brand-purple" />
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p className="text-[10px] font-bold uppercase tracking-wide text-foreground/60">
          Asset Status
        </p>
        <div className="mt-2 flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-xs text-foreground">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-brand-purple"
            />
            Current
          </span>
          <span className="flex items-center gap-1.5 text-xs text-foreground">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full border-2 border-slate-400 bg-white"
            />
            Previous
          </span>
        </div>
      </div>
    </div>
  );
}

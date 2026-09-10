import { PlantTypeIcon } from "./PowerPlantMarker";
import type { PowerPlant } from "./powerPlants";

export default function PowerPlantPopup({ plant }: { plant: PowerPlant }) {
  const isCurrent = plant.status === "current";

  return (
    <div className="w-48 rounded-lg bg-white p-3 shadow-xl ring-1 ring-black/10">
      <p className="text-sm font-bold text-brand-purple">{plant.name}</p>
      <p className="mt-0.5 text-xs text-foreground/70">{plant.location}</p>
      <div className="mt-2 flex items-center justify-between text-xs text-foreground">
        <span className="flex items-center gap-1 font-semibold">
          <PlantTypeIcon type={plant.type} className="h-3.5 w-3.5 text-brand-purple" />
          {plant.type}
        </span>
        <span className="font-semibold">{plant.capacity}</span>
      </div>
      <span
        className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
          isCurrent
            ? "bg-brand-purple/10 text-brand-purple"
            : "bg-slate-200 text-slate-600"
        }`}
      >
        {isCurrent ? "Current" : "Previous"}
      </span>
    </div>
  );
}

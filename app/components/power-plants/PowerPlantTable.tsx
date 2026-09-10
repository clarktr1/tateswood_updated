"use client";

import { PlantTypeIcon } from "./PowerPlantMarker";
import { powerPlants, type PowerPlant } from "./powerPlants";

function StatusBadge({ status }: { status: PowerPlant["status"] }) {
  const isCurrent = status === "current";
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
        isCurrent
          ? "bg-brand-purple/10 text-brand-purple"
          : "bg-slate-200 text-slate-600"
      }`}
    >
      {isCurrent ? "Current" : "previous"}
    </span>
  );
}

type PowerPlantTableProps = {
  activePlantName?: string | null;
};

export default function PowerPlantTable({
  activePlantName = null,
}: PowerPlantTableProps) {
  return (
    <div>
      {/* Mobile: stacked cards, no horizontal scrolling */}
      <div className="divide-y divide-brand-purple/10 rounded-2xl bg-white shadow-md ring-1 ring-brand-purple/10 md:hidden">
        {powerPlants.map((plant) => (
          <div key={plant.name} className="px-5 py-4">
            <p className="font-semibold text-foreground">{plant.name}</p>
            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
              <dt className="text-foreground/50">Location</dt>
              <dd className="text-foreground">{plant.location}</dd>
              <dt className="text-foreground/50">Type</dt>
              <dd className="flex items-center gap-1.5 text-foreground">
                <PlantTypeIcon type={plant.type} className="h-4 w-4 text-brand-purple" />
                {plant.type}
              </dd>
              <dt className="text-foreground/50">Capacity</dt>
              <dd className="text-foreground">{plant.capacity}</dd>
              <dt className="text-foreground/50">Status</dt>
              <dd>
                <StatusBadge status={plant.status} />
              </dd>
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop: full table */}
      <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-md ring-1 ring-brand-purple/10 md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-brand-purple/10 text-xs font-bold uppercase tracking-wide text-foreground/60">
              <th scope="col" className="px-6 py-4">
                Plant
              </th>
              <th scope="col" className="px-6 py-4">
                Location
              </th>
              <th scope="col" className="px-6 py-4">
                Type
              </th>
              <th scope="col" className="px-6 py-4">
                Capacity
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {powerPlants.map((plant) => (
              <tr
                key={plant.name}
                className={`border-b border-brand-purple/5 last:border-0 ${
                  activePlantName === plant.name ? "bg-brand-purple/5" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-foreground">
                  {plant.name}
                </td>
                <td className="px-6 py-4 text-foreground">{plant.location}</td>
                <td className="px-6 py-4 text-foreground">
                  <span className="flex items-center gap-2">
                    <PlantTypeIcon
                      type={plant.type}
                      className="h-4 w-4 text-brand-purple"
                    />
                    {plant.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-foreground">{plant.capacity}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={plant.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

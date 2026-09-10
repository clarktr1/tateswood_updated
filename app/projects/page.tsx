import Image from "next/image";
import PowerPlantsExplorer from "@/app/components/power-plants/PowerPlantsExplorer";

export default function Projects() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src="/assets/header1-optimized.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/90 via-brand-purple/70 to-accent-purple/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
          <div className="border-l-4 border-brand-orange pl-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
              A national portfolio of current and previous independent power
              plant assets under Tateswood management.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-background [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      </section>

      {/* Map and table */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <PowerPlantsExplorer />
      </section>
    </main>
  );
}
